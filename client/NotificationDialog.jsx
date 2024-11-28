import React, { useState } from 'react'
import { Dialog,Stack,DialogTitle,Typography,Avatar,Button } from '@mui/material'
import { sampleNotif } from '../constants/sampleData'
const NotificationDialog = () => {
  const [open,setOpen]=useState(true);
  const handler=()=>{
    
  }
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="25rem">
          <Stack>
            <DialogTitle>
              Notifications
            </DialogTitle>
           { sampleNotif.length?
           <>
              <Stack>
                {
                  sampleNotif.map((i)=>{
                    return <NotifItem id={i.id} sender={i.sender}/>
                  })
                }
              </Stack>
           </>
           :<Typography align="center">No Notifications Yet!</Typography>}
          </Stack>
      </Dialog>
    </div>
  )
}

export default NotificationDialog


const NotifItem=({sender,id})=>{
 return(
  <Stack direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  width={"100%"}
  >
  <Avatar src={sender.avatar}/>
<Typography
 variant='body1'
 sx={{
  flexGrow:1,
  display:"-webkit-box",
  WebkitLineClamp:1,
  WebkitBoxOrient:'vertical',
  overflow:'hidden',
  textOverflow:"ellipses",
  width:"100%"

 }}
>
  {
    sender.name
  }
</Typography>
 <Stack direction={"row"}>
 <Button onClick={()=>{
  handler({_id,accept:true})
 }}>accept</Button>
 <Button
  sx={{
    color:"red"
  }}
  onClick={()=>{
    handler({_id,accept:false})
   }}
 >reject</Button>
 </Stack>
 </Stack>
 )
}