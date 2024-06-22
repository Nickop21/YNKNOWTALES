import React, { useEffect, useState } from "react";
import PostCard from "../../componets/PostCard";
import appwriteService from "../../appwrite/config";
import Container from "../../componets/Container";
import { Typography } from "@material-tailwind/react";
import TabsSection from "../TabsSection";
// import { Pagination } from "../Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PopularBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate=useNavigate()
  const { PostsData, category } = useSelector((state) => state.postSlice);
  useEffect(() => {
    if (PostsData) {
      if (category!="All") {
        const currentCat = PostsData.filter((data) => data.category === category);
        setloading(true)
        setTimeout(() => {
          setloading(false);
          setPosts(currentCat);
        }, 600);
      }
     else
     {
       setloading(false)
       setPosts(PostsData)
     }
     
    }
  }, [PostsData, category]);


 
  function skelton() {
    return (
      <>
        <div className="animate-pulse w-[380px] mr-2 bg-white rounded-lg h-[400px]">
          <div className="w-full rounded-lg h-60 bg-gray-300 mb-4 flex items-center justify-center">
          {posts.length==0 && <Typography variant="h6" className="">No Post Avaliable for this category</Typography>}

          </div>
          <div className="w-1/2 h-4 bg-gray-300 rounded mb-4"></div>
          <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
        </div>
        
       
      </>
    );
  }
  return (
    <div>
      <div className="w-full py-8">
        <Container>
          <Typography variant="h2" color="amber" className="mb-5">
            <span className="text-white">Blo</span>gs
          </Typography>
          <TabsSection />
          <div className="flex flex-wrap justify-center">
            {!loading &&posts.length!=0
              ? posts.map((post) => (
                  <div key={post.$id} className="p-2 ">
                    <PostCard  {...post} />
                  </div>
                ))
              : skelton()}
          </div>
        </Container>
      </div>

      {/* <CreateBlog/> */}
      {/* <PostCard post={posts}/> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default PopularBlogs;
