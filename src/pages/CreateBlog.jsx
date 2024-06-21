import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import appwriteService from "../appwrite/config";
import Inputfun from "../componets/Input";
import RTE from "../componets/RTE";
import Select from "../componets/Select";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Typography } from "@material-tailwind/react";
import ImageUpload from "../componets/ImageUpload";
import Header from "../componets/Header";
import Container from "../componets/Container";
import Loader from "../componets/Loader";
import Alertmssg from "../componets/Alertmssg";

function CreateBlog() {
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      status: "active",
      category: "others",
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [sucessmssg, setsucessmssg] = useState(false);
  const [error, seterror] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      clearErrors("featureImage");
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submit = async (data) => {
    clearErrors("content");
    setloading(true);

    // if (blogPost) {
    //   const file = data.featureImage[0]
    //     ? await appwriteService.uploadeFile(data.featureImage[0])
    //     : null;

    //   if (file) {
    //     appwriteService.deleteFile(blogPost.featureImage);
    //   }

    //   const dbPost = await appwriteService.updatePost(blogPost.$id, {
    //     ...data,
    //     featureImage: file ? file.$id : undefined,
    //   });

    //   if (dbPost) {
    //     navigate(`/post/${dbPost.$id}`);
    //   }
    // }
    // else {
    const file = await appwriteService.uploadeFile(data.featureImage[0]);

    if (file) {
      const fileId = file.$id;
      data.featureImage = fileId;
      console.log("userdata.id", userData.userData.$id);
      const dbPost = await appwriteService.createPost({
        ...data,
        userId: userData.userData.$id,
      });

      if (dbPost) {
        setloading(false);
        setsucessmssg(true);

        setTimeout(() => {
          navigate(`/`);
        }, 1500);
      }
    }
    // }
  };

  return (
    <div className=" bg-white relative">
      {sucessmssg && (
        <div className="relative z-[9999999999999999]">
          <Alertmssg
            textMssg="successfull added"
            color="white"
            bgColor="#22DD22"
            type="success"
          />
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <Container>
          <form onSubmit={handleSubmit(submit)} className="flex flex-wrap  ">
            <Header />
            <div className="w-full px-2 pt-[100px]">
              <Inputfun
                label="Title :"
                placeholder="Title"
                color="amber"
                className="mb-4 "
                minLength="10"
                maxLength="120"
                {...register("title", { required: "Title is required" })}
              />

              {errors.title && (
                <p className="text-red-700 text-sm">
                  Title required
                </p>
              )}

              <label className=" font-extrabold text-xl">
                <span>write your</span>
                <span className="text-amber-500">story</span>
              </label>
              <RTE
                label=""
                name="content"
                control={control}
                defaultValue={getValues("content")}
                error={errors.content && errors.content.message}
                
              />
            </div>

            <div className="w-full px-2 my-6 flex  items-center justify-between flex-col gap-5">
              <Select
                options={["active", "inactive"]}
                label="Status"
                color="amber"
                className="mb-4 hidden"
                {...register("status", { required: true })}
              />
              <div className="w-full">
                <label htmlFor="category" className=" font-extrabold text-xl">
                  <span>Cate</span>
                  <span className="text-amber-500">gory</span>
                </label>
                <Select
                  options={["Lifestyle", "Travel", "Hobbies", "others"]}
                  label="category"
                  className="mb-4  mt-5"
                  {...register("category", { required: true })}
                />
              </div>
              <div className="flex  flex-col gap-4  items-center border p-6 rounded-lg w-80 mx-auto">
                <label htmlFor="category" className=" font-extrabold text-xl">
                  <span >Choose</span>
                  <span className="text-amber-500">Image</span>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className=""
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register(
                    "featureImage",
                    { required: true },
                  )}
                  onChange={handleImageChange}
                />
                {errors.featureImage && (
                 <p className="text-red-700 text-sm mt-2">
                    Image required
                  </p>
                )}
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
            </div>
          </form>
        </Container>
      )}
    </div>
  );
}

export default CreateBlog;
