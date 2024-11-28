import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Logout as LogoutIcon,
  GroupAdd as GroupIcon,
  Notifications as NotifIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { Suspense, lazy, useState } from "react";
import NotificationDialog from "../specific/NotificationDialog";
import NewGroupDialog from "../specific/NewGroupDialog";
import axios from "axios";
const SearchDialog = lazy(() => import("../specific/SearchDialog"));


import toast from "react-hot-toast";
import { userNotExists } from "../../redux/reducer/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const [isMobile, setISMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const handleMobile = () => {
    console.log("mobile");
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const opennewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };


  const handlelogout = async() => {
   try {
     const res = await axios.get(`http://localhost:3000/api/v1/user/logout`,{withCredentials:true});
     dispatch(userNotExists());
    //  toast.success("logged out successfully");
    console.log("sudccess");
   } catch (error) {
    toast.error(error?.response?.data?.message || "something went worong");
    console.log("something went wrong");
   }
  };



  const handleNotif = () => {
    setIsNotification((prev) => !prev);
  };
  const naviGroups = () => {
    navigate("/group");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1, bgcolor: "black" }} height="4rem">
        <AppBar
          position="static"
          sx={{
            bgcolor: "black",
          }}
        >
          <Toolbar>
            <Typography
              variant="h8"
              sx={{
                display: { xs: "none", sm: "block" },
                textTransform: "uppercase",
                ":hover": {
                  color: "red",
                },
              }}
            >
              socialize
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="white" onClick={handleMobile}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box flexGrow={1}></Box>
            <Box>
              <Tooltip title="search">
                <IconButton color="white" size="large" onClick={openSearch}>
                  <SearchIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="add new group">
                <IconButton color="white" size="large" onClick={opennewGroup}>
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="manage groups">
                <IconButton color="white" size="large" onClick={naviGroups}>
                  <GroupIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="notifications">
                <IconButton color="white" size="large" onClick={handleNotif}>
                  <NotifIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="logout">
                <IconButton color="white" size="large" onClick={handlelogout}>
                  <LogoutIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </div>
  );
};

export default Header;
