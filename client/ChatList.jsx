import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'
const ChatList = (
  {w="100%",
  chats=[],
  chatId,
  onlineUsers=[],
  newMessagesAlert=[{
  chatId:"1",
  count:"2",
}],handleDeleteChat,}) => {
  return (
    <div>
      <Stack width={w} direction={"column"}>
      {
        chats?.map((data,index)=>{
          const {avatar,name,_id,groupChat,members}=data;
          const newMessageAlert = newMessagesAlert.find(

            ({chatId}) =>chatId === _id
          );
            const isOnline = members?.some((member)=>onlineUsers.includes(_id));

          return <ChatItem
          index={index}
           newMessageAlert={newMessageAlert}
           isOnline={isOnline}
           avatar={avatar}
           name={name}
           _id={_id}
           key={_id}
           groupChat={groupChat}
           sameSender={chatId === _id}
           handleDeleteChat={handleDeleteChat}
          />
        })
      }
      </Stack>
    </div>
  )
 }
export default ChatList
