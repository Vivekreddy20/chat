import { FileOpen } from '@mui/icons-material';
import React from 'react'

const RenderAttachment = (file,url) => {
  
    switch(file)
    {
        case "video": 
         return <video src={url} preload ="none" width={"200px" } height={"200px"}></video>
          break;
        case "image": 
         return <img src={url} 
            width={"200px"}
            height={"200px"}
            style={{
                objectFit:"cover",
            }}
          />
          break;
          case "audio": 
          return  <audio src={url} preload='none' controls></audio>
          break;
          default:
           return <FileOpen/>
          
    }
}

export default RenderAttachment
