import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import appwriteService from "../appwrite/config";
import Inputfun from "./Input";
import RTE from "./RTE";
import Select from "./Select";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateBlog({ blogPost }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: blogPost?.title || "",
        slug: blogPost?.$id || "",
        content: blogPost?.content || "",
        status: blogPost?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);


  const submit = async (data) => {
    console.log("blogposyb",blogPost);
    if (blogPost) {
      const file = data.featureImage[0]
        ? await appwriteService.uploadeFile(data.featureImage[0])
        : null;

      if (file) {
        appwriteService.deleteFile(blogPost.featureImage);
      }

      const dbPost = await appwriteService.updatePost(blogPost.$id, {
        ...data,
        featureImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadeFile(data.featureImage[0]);

      if (file) {
        const fileId = file.$id;
        data.featureImage = fileId;
        console.log("userdata.id",userData.userData.$id);
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.userData.$id ,
        });

        // if (dbPost) {
        //   navigate(`/post/${dbPost.$id}`);
        // }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Inputfun
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Inputfun
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Inputfun
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("featureImage", { required: !blogPost })}
        />
        {blogPost && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getfilePreview(blogPost.featureImage)}
              alt={blogPost.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <button
          type="submit"
          bgColor={blogPost ? "bg-green-500" : undefined}
          className="w-full"
        >
          {blogPost ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default CreateBlog;
