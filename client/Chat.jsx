import React, { useEffect, useRef, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Stack,IconButton } from "@mui/material";
import { AttachFile as AttachFileIcon } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import MessageComponent from "../components/shared/MessageComponent";
import { sampleMessage } from "../components/constants/sampleData";
import { useParams } from "react-router-dom";


const Chat = () => {
  const fileref=useRef(null);
  const params=useParams();
  const userId=params.chatid;
  const user={
    _id:userId,
    name:"vivek",
  };
  return(
    <div style={{color:"white",height:"100%"}} >
      <Stack 
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
       bgcolor={"white"}
       color={"white"}
       sx={{
        overflowX:"hidden",
        overflowY: "auto",
        height:"90%"
       }}
      >
       {
        sampleMessage.map((i)=>{
          return (<MessageComponent message={i} user={user}/>)
        })
       }
      </Stack >
      <form style={{height:"10%",width:"100%"}}>
      
       <Stack direction={"row"} bgcolor={"grey"}> 
       <IconButton ref={fileref}>
          <AttachFileIcon/>
        </IconButton>
       <InputBox type="text" placeholder="Type a message..." />
        <IconButton>
        <SendIcon/>
      </IconButton>
       </Stack>
        
      </form>
      
     
      <FileMenu />
    </div>
  )
};

export default AppLayout()(Chat);
