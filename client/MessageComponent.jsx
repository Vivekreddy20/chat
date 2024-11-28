import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react'
import { fileformat } from '../../lib/features';
import RenderAttachment from './RenderAttachment';

const MessageComponent = ({message,user}) => {
    const {sender,content,attachments=[],createdAt}=message;
    const samesender=user._id===sender._id;
    const timeAgo=moment(createdAt).fromNow();
  return (
    <div style={{
        color:"black",
        alignSelf:samesender?"flex-end":"flex-start",
        marginBottom:"10px",
        backgroundColor:"lightgrey",
        borderRadius:"5px",
        padding:"10px",
        maxWidth:"60%",
        overflowWrap:"break-word",
        
    }}>
      {
        (!samesender) && ( <Typography variant='caption' sx={{
            textTransform:"capitalize",
        }}>
            {sender.name}
        </Typography> )
       
      }
         {
            content && <Typography>{content} </Typography>
        }

        {
            attachments.length>0 && attachments.map((attachment,index)=>{
                const url=attachment.url;
                const file=fileformat(url);
                return(
                    <Box>
                        <a href={url} target='_blank' download style={{
                            color:"black"
                        }}>
                            {RenderAttachment(file,url)}
                        </a>
                    </Box>
                )
              
            })

        }
        

        <Typography variant='caption'>
            {timeAgo}
        </Typography>

    </div>
  )
}

export default MessageComponent
