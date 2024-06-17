import React from "react";
import "../../src/card.css"
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
function PostCard({ $id, title, featureImage, content }) {
  const navigate = useNavigate();
  return (
 
    <>

  <div className="card-hover rounded-lg">
    <div className="card-hover__content">
      <Typography variant="h6" className="card-hover__title ">
        {title}
      </Typography>
    
      <Button className="card-hover__link " onClick={() => navigate(`/blog/${featureImage}`)}>
      <span>Read more</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>  
      </Button>
    </div>
    
    <img src={appwriteService.getfilePreview(featureImage)} 
    alt={title} className="img-hov rounded-lg"/>
  </div>
     
</>
  );
}

export default PostCard;
