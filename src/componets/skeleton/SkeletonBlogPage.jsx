import React from 'react'
import Container from '../Container'

function SkeletonBlogPage() {
  return (
    <div className="bg-[#121316]  animate-pulse">
    <Container>
      <div className="w-full pt-32 flex justify-center text-center leading-8">
        <div className="w-full ">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="h-4 bg-gray-200 rounded w-[30px] mb-4"></div>

            <div className="h-6 bg-gray-200 rounded w-[50%] block mb-4"></div>
            <div className=" p-3 border rounded-lg h-4 w-[10%] bg-gray-200 mt-3 mb-4"></div>
          </div>

          <div className="w-full rounded-lg h-80 md:h-80 bg-gray-300 mb-4"></div>

          <div className="w-full flex items-center justify-center">
            <div className="pt-3 pb-14 text-start w-[100%] md:w-[80%] ">
              <div className="h-4 bg-gray-200 rounded w-1/4 block mt-12 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>

              <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>

              <div className="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 block mt-12 mb-4"></div>

              <div className="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default SkeletonBlogPage
