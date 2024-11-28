import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack,Typography,Avatar,Button } from '@mui/material'
import viewProfile from '../specific/viewProfile'
const ChatItem = (
  {avatar=[],
  name,
  _id,
  groupChat=false,
  sameSender,
  isOnline,
  newMessageAlert,
  index=0,
  handleDeleteChat}
) => {
  return (
   <>
     <Link 
     
     sx={{
      padding:"0"
     }}
    to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}>
      <div style={{
        display:"flex",
        gap:"1rem",
        alignItems:"center",
        padding:"1rem",
        backgroundColor:sameSender?"	rgb(211, 211, 211)":"unset",
        color:sameSender?"black":"white",
        position:"relative",
      }}>
        <Stack direction={"row"}sx={{
          gap: "1rem"
        }}>
        <Avatar sx={{
                width:"2rem",
                height:"2rem",
                objectfit:"contain"
              }} src={avatar}/>
        <Stack>
              <Typography>{name}</Typography>
              {newMessageAlert && (
                <Typography>~{newMessageAlert.count} new messages~</Typography>
              )}
        </Stack>
      </Stack>
       {
        isOnline && (
          <Box sx={{
            width:"9px",
            height:"9px",
            borderRadius:"50%",
            backgroundColor:"#90EE90",
            position:"absolute",
            top:"50%",
            right:"1rem",
            transform:"translateY(-50%)",
          }}></Box>
        )
       }
        
      </div>
      
    </Link>
   </>
  )
}

export default memo(ChatItem)
