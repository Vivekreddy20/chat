
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { server } from "../components/constants/config"
import { VisuallyHiddenInput } from "../components/styles/StyledComponents"
import { userExists } from "../redux/reducer/auth"
import { usernamevalidator } from "../utils/validator"

const Login = () => {
  const dispatch = useDispatch();
  const [isLogin,setisLogin]=useState(true);
  const name=useInputValidation("");
  const bio=useInputValidation("");
  const password=useStrongPassword();
  const username=useInputValidation("",usernamevalidator);
  const avatar=useFileHandler("single");
  const toggleLogin=()=>{setisLogin(prev => !prev)}


  const handleLogin=async(e)=>{
    e.preventDefault();
    const config = {
      withCredentials:true,
      headers:{
        "Content-Type":"application/json",
      }
    };
    try {
   const {data} =  await axios.post(`http://localhost:3000/api/v1/user/login`,
    {
      username:username.value,
      password:password.value,
    },
    config,
  );
   dispatch(userExists(true));
   toast.success(data.message);
    } catch (error) {

      console.log(error);
      toast.error( error.message || "something went wrong");
    }
  }
  const handleSignUp=async(e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("avatar",avatar.file);
    formData.append("name",name.value);
    formData.append("bio",bio.value);
    formData.append("username",username.value);
    formData.append("password",password.value);

    const config = {
      withCredentials:true,
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
    try {
      const {data} = await axios.post(`http://localhost:3000/api/v1/user/new`,formData,config
      );
      dispatch(userExists(true));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");
    }

  }
  return (
    <div>
      <Container component={"main"} maxWidth="xs"
    sx={{
      height:"",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }} >
      <Paper 
       elevation={24}
       sx={{
        padding:9,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
       }}>
        {isLogin ? (
          <>
           <Typography variant="h5">Login in</Typography>
           <form style={{
            width:"100% ",
            marginTop:"1rem"
            
           }}
           onSubmit={handleLogin}
           >
            <TextField
             required
             fullWidth
             label="username"
             margin="normal"
             variant="outlined"
             value={username.value}
             onChange={username.changeHandler}
            />
            
            <TextField
             required
             fullWidth
             label="password"
             type="password"
             margin="normal"
             variant="outlined"
             value={password.value}
             onChange={password.changeHandler}
            />
            
            <Button type="submit" sx={{
              marginTop:"1rem"
            }} variant="contained" color="secondary" fullWidth>Login</Button>

            <Typography textAlign="center" margin="1rem">Or</Typography>
            <Button sx={{
            }} variant="text" color="secondary" fullWidth onClick={toggleLogin}>register</Button>
           </form>
          </>
        ) : (
         <>
          <Typography variant="h5">Register</Typography>
          <form style={{
            width:"100% ",
            marginTop:"1rem"
           }}
           onSubmit={handleSignUp}
           >
            <Stack position={"relative"} width={"10rem"} margin={"auto"} >
              <Avatar sx={{
                width:"10rem",
                height:"10rem",
                objectfit:"contain"
                
              }}
              src={avatar.preview}
              />
              {
              avatar.error &&(
                <Typography color={"error"} variant="caption">
                  {avatar.error}
                </Typography>
              )
            }
              <IconButton
               sx={{
                width:"10rem",
                height:"10rem",
                position:"absolute",
                bottom:"0",
                right:"0",
                backgroundColor:"transparent",
                color:"transparent",
                ":hover":{
                  color:"white",
                  backgroundColor:"grey"
                }
              }}

               
               component="label"
              >
                <>
                <CameraAltIcon/>
                <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                </>
              </IconButton>

            </Stack>

            <TextField
             required
             fullWidth
             label="name"
             margin="normal"
             variant="outlined"
             value={name.value}
             onChange={name.changeHandler}
            />
            <TextField
             required
             fullWidth
             label="Bio"
             margin="normal"
             variant="outlined"
             value={bio.value}
             onChange={bio.changeHandler}
            />
            <TextField
             required
             fullWidth
             label="username"
             margin="normal"
             variant="outlined"
             value={username.value}
             onChange={username.changeHandler}
            />
            {
              username.error &&(
                <Typography color={"error"} variant="caption">
                  {username.error}
                </Typography>
              )
            }
            <TextField
             required
             fullWidth
             label="Set password"
             type="password"
             margin="normal"
             variant="outlined"
             value={password.value}
             onChange={password.changeHandler}
            />
            {
              password.error &&(
                <Typography color={"error"} variant="caption">
                  {password.error}
                </Typography>
              )
            }
            <Button type="submit" sx={{
              marginTop:"1rem"
            }} variant="contained" color="secondary" fullWidth>Register</Button>

            <Typography textAlign="center" margin="1rem">Or</Typography>
            <Button sx={{
            }} variant="text" color="secondary" fullWidth onClick={toggleLogin}>login</Button>
           </form>
         </>
        )}
       </Paper>
    </Container>
    </div>
  )
}

export default Login
