import React, { useEffect, useState } from 'react'
import RTE from '../../componets/RTE'
import CreateBlog from '../../componets/CreateBlog'
import PostCard from '../../componets/PostCard'
import appwriteService from '../../appwrite/config'
import Container from '../../componets/Container'
import { Typography } from '@material-tailwind/react'
import TabsSection from '../TabsSection'

function PopularBlogs() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (posts.length === 0) {
      return (
          <div className="w-full py-8 mt-4 text-center">
              <Container>
                  <div className="flex flex-wrap">
                      <div className="p-2 w-full">
                          <h1 className="text-2xl font-bold hover:text-gray-500">
                              Login to read posts
                          </h1>
                      </div>
                  </div>
              </Container>
          </div>
      )
  }
    return (
      <div>
           <div className='w-full py-8'>
              <Container>
                <TabsSection/>
               <Typography variant='h2' color='white'>
                    Blogs
               </Typography>
                  <div className='flex flex-wrap'>
                      {posts.map((post) => (
                          <div key={post.$id} className='p-2 w-1/4'>
                              <PostCard {...post} />
                          </div>
                      ))}
                  </div>
              </Container>
          </div>
     
     {/* <CreateBlog/> */}
     {/* <PostCard post={posts}/> */}
  
      </div>
    )
  }

export default PopularBlogs
