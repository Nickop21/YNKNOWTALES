import React, { useEffect, useState } from 'react'
import RTE from '../componets/RTE'
import CreateBlog from '../componets/CreateBlog'
import PostCard from '../componets/PostCard'
import appwriteService from '../appwrite/config'
import Container from '../componets/Container'
import HeroSection from "../componets/Home/HeroSection";
import Header from '../componets/Header'
import PopularBlogs from '../componets/Home/PopularBlogs'
import TrendingBlog from '../componets/Home/TrendingBlog'


function Home() {

  return (
  <div>
  <Header/>
 <HeroSection/>
 <TrendingBlog/>
<PopularBlogs/>


  </div>
  )
}

export default Home
