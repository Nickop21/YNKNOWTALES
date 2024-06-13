import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import appwriteService from '../appwrite/config';
   

function PostCard({$id, title, featureImage,content}) {
    return (
        <Card className="mt-6 w-96  h-[400px] relative">
          <CardHeader color="blue-gray" className="relative overflow-visible h-60 ">
            <img
              src={appwriteService.getfilePreview(featureImage)}
              alt={title}
              className=' object-cover object-center w-full h-full max-h-full'
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="" className="mb-2">
              {title}
            </Typography>
            {/* <Typography>
                {content}
            </Typography> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button className='absolute bottom-2'>Read More</Button>
          </CardFooter>
        </Card>
      );
}

export default PostCard
