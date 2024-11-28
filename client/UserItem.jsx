import React, { memo } from 'react'
import {ListItem,Stack,Avatar,Typography,IconButton } from '@mui/material'
import { Add as Addicon } from '@mui/icons-material';
const UserItem = ({user,handler,handlerIsLoading}) => {
    const {avatar, name, _id}=user;
  return (
    <ListItem>

        <Stack direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
            <Avatar/> 
            <Typography
             variant="body1"
             sx={{
                flexGlow:1,
                display:"-webkit-box",
                WebkitLineClamp:1,
                WebkitBoxOrient:"vertical",
                overflow:"hidden",
                textOverflow:"ellipsis",
                color:"black",
                width:"100%"
             }}
            >{name}</Typography>
            <IconButton
            size="small"
            sx={{
                bgcolor:"blue",
                color:"white"
            }}
            onClick={()=>handler(_id)}  disabled={handlerIsLoading}>
                <Addicon/>
            </IconButton>
        </Stack>
    </ListItem>
  )
}

export default memo(UserItem)
