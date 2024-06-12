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
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={appwriteService.getfilePreview(featureImage)}
              alt={title}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography>
                {content}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      );
}

export default PostCard