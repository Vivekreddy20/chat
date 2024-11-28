import React, { useState } from 'react'
import { Dialog,DialogTitle,Stack,TextField,Typography } from '@mui/material'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'
const NewGroupDialog = () => {
  const [open,setOpen]=useState(true)
  const selectMemberHandler=()=>{}
  const groupName=useInputValidation("");
  const submitHandler=()=>{}
  return (
    <div>
      <Dialog open={open} onClose={()=>setOpen(false)}>
      <Stack direction={"column"}
  alignItems={"center"}
  spacing={"1rem"}
  width={"100%"}
  >
          <DialogTitle>new group</DialogTitle>
          <TextField label={"group name"} value={groupName.value} onChange={groupName.changeHandler}/>
          <Typography>members</Typography>
          <Stack>
          {
             sampleUsers.map((i)=>{
             return(<UserItem user={i} key={i._id} handler={selectMemberHandler} />)
            })  
          }
          </Stack>
          <Stack direction={"row"}>
            <button>cancel</button>
            <button onClick={submitHandler}>create</button>
          </Stack>
          </Stack>
      </Dialog>
    </div>
  )
}

export default NewGroupDialog
