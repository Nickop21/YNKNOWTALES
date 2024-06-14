import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import appwriteService from "../appwrite/config";
import Inputfun from "../componets/Input";
import RTE from "../componets/RTE";
import Select from "../componets/Select";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import ImageUpload from "../componets/ImageUpload";
import Header from "../componets/Header";
import Container from "../componets/Container";


function CreateBlog({ blogPost, handleOpen }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: blogPost?.title || "",
      slug: blogPost?.$id || "",
      content: blogPost?.content || "",
      status: blogPost?.status || "active",
      category:blogPost?.status || "others"
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    console.log("uploded");
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      // if (register.onChange) {
      //   register.onChange(e);
      // }
    }
  };

  const submit = async (data) => {

    console.log(data);
    
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
        console.log("userdata.id", userData.userData.$id);
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.userData.$id,
        });

        // if (dbPost) {
        //   navigate(`/post/${dbPost.$id}`);
        // }
      }
    }

    handleOpen(setOpen(!open));
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
    <div className="bg-white">

    <Container>
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-white ">
      <Header/>
      <div className="w-full px-2 pt-[100px]">
        {/* {errors && <p>{errors}</p>} */}
        <Inputfun
          label="Title :"
          placeholder="Title"
          color="amber"
          className="mb-4 "
          minlength="10"
          maxlength="120"
          {...register("title", { required: true })}
        />
        <Inputfun
          label="Slug :"
          placeholder="Slug"
          className="mb-4 hidden "
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
                 <span cla>Con</span><span className="text-amber-500">tent</span>
        <RTE
          label=""
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-full px-2 my-6 flex  items-center justify-between flex-col gap-5">
        {/* <Inputfun
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("featureImage", { required: !blogPost })}
        /> */}
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
          color="amber"
          className="mb-4 hidden"
          {...register("status", { required: true })}
        />
        <div className="w-full">

        <label htmlFor="category" className=" font-extrabold text-xl">
         <span cla>Cate</span><span className="text-amber-500">gory</span>
        </label>
        <Select
          options={[
            "Lifestyle",
            "Travel",
            "Hobbies",
            "others"]}
          label="category"
          className="mb-4  mt-5"
          {...register("category", { required: true })}
        />
        
        </div>
        <div className="flex  flex-col gap-4  items-center border p-6 rounded-lg w-80 mx-auto">

          <input
            type="file"
            id="fileInput"
            className=""
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("featureImage", { required: !blogPost })}
            onChange={handleImageChange}
          />
         
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-52 rounded mb-4"
            />
          )}
      
        </div>
        <Button type="submit" color="amber">
          Submit
        </Button>
        {/* <button
          type="submit"
          bgColor={blogPost ? "bg-green-500" : "amber"}
          className="w-full"
        >
        
          {blogPost ? "Update" : "Submit"}
        </button> */}
      </div>
    </form>
    </Container>
    </div>
  );
}

export default CreateBlog;
