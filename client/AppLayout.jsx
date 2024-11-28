import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid, Skeleton } from "@mui/material";
import ChatList from "../specific/ChatList";
import { samplechats } from "../constants/sampleData";
import { useParams } from "react-router-dom";
import { useMyChatsQuery } from "../../redux/api/api";




const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatid;

    const {isLoading,data,isError,error,refetch} = useMyChatsQuery("");

    console.log(data);

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat ", _id, groupChat);
    };

    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem) "}>
          <Grid
            item
            xs={5}
            sm={5}
            height={"100%"}
            sx={{
              padding: 2,
              backgroundColor: "black",
              border: "1px solid rgb(32,32,32)",
            }}
          >
            {
              isLoading ? (<>Loading</>):(
              <ChatList
              chats={data?.chats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
              )
            }
          </Grid>
          <Grid
            item
            xs={7}
            sm={7}
            height={"100%"}
            sx={{
              
              backgroundColor: "black",
            }}
          >
            <WrappedComponent {...props} />
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
