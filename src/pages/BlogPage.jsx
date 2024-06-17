import React, { useEffect, useRef, useState } from "react";
import Container from "../componets/Container";
import { Button, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import SimilarPostCard from "../componets/SimilarPostCard";
import Arrow from "../img/arrow.svg";
import SkeletonBlogPage from "../componets/skeleton/SkeletonBlogPage";

function BlogPage() {
  const param = useParams();
  const [postData, setPostData] = useState([]);
  const [currentpostData, setCurrentPostData] = useState([]);
  const [loading, setloading] = useState(true);
  const { PostsData } = useSelector((state) => state.postSlice);
  const carouselContainer = useRef();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (PostsData && param) {
      const filteredData = PostsData.filter(
        (data) => data.featureImage === param.id
      );
      setPostData(filteredData);

      const currentdata = PostsData.filter(
        (data) => postData[0]?.category === data.category
      );
      setTimeout(() => {
        setCurrentPostData(currentdata);
        setloading(false);
      }, 600);
    }
  }, [PostsData, param]);

  return !loading ? (
    <div className="bg-[#121316]">
      <div className=" pt-32 flex justify-center text-center leading-8">
        {postData.map((data, index) => (
          <div className="w-full" key={index}>
            <Container>
              <div className="w-full">
                <span className="p-3 border rounded-lg text-amber-500 text-xs">
                  {data.category == null ? "Stories" : data.category}
                </span>
                <Typography variant="h2" color="white" className="mt-12 mb-4">
                  {data.title}
                </Typography>
                <span className=" text-gray-600 mr-5 font-semibold">
                  June 12 2024
                </span>
                <span className=" text-gray-600 font-semibold">5min read</span>
              </div>

              {/* img */}
              <div className="mt-4 flex items-center justify-center ">
                <img
                  src={appwriteService.getfilePreview(data.featureImage)}
                  alt="Preview"
                  className="w-[100%] max-w-full max-h-96 rounded mb-4 object-cover rounded-2xl"
                />
              </div>
              {/* main content */}

              <div className="text-white pt-3 pb-14 text-start">
                <Typography variant="h6" color="amber" className="mt-12 mb-4">
                  Read the article
                </Typography>
                <div>{parse(data.content)}</div>
              </div>

              {/* SIMILAR content */}
              <Typography
                variant="h6"
                color="amber"
                className="mt-12 mb-4 text-start"
              >
                Similar articles
              </Typography>

              <div className="relative">
                {currentpostData.length > 2 && (
                  <img
                    src={Arrow}
                    alt=""
                    className="absolute -left-4 top-[50%] translate-y-[-50%] z-[9999] rotate-[270deg] h-16 w-16 cursor-pointer"
                    onClick={() => navigation("left")}
                  />
                )}
                {currentpostData.length > 2 && (
                  <img
                    src={Arrow}
                    alt=""
                    className="absolute -right-4 top-[50%] translate-y-[-50%] z-[9999] rotate-[90deg] h-16 w-16 cursor-pointer"
                    onClick={() => navigation("right")}
                  />
                )}

                <div
                  className="relative w-full flex  gap-4 mb-20 overflow-hidden"
                  ref={carouselContainer}
                >
                  {currentpostData.length != 1 ? (
                    currentpostData.map((data, index) => (
                      <SimilarPostCard key={index} {...data} />
                    ))
                  ) : (
                    <>
                      <div className="animate-pulse w-[200px] mr-2 bg-white rounded-lg h-[200px]">
                        <div className="w-full rounded-lg h-60 bg-gray-300 mb-4 flex items-center justify-center">
                          <Typography variant="h6" className="">
                            No similar blogs Avaliable{" "}
                          </Typography>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <SkeletonBlogPage/>
  );
}

export default BlogPage;
