import { Dialog,Stack,DialogTitle,TextField, InputAdornment,List,ListItem } from '@mui/material'
import React, { useState } from 'react';
import {useInputValidation} from '6pp'
import { Search as SearchIcon} from '@mui/icons-material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../constants/sampleData'

const SearchDialog = () => {
  const search=useInputValidation("");
  let isLoadingSendfriendRequist=false;
  const [user,setUsers]=useState(sampleUsers);
  const addFriendHandler=(id)=>{
    console.log(id);
  }
  const [open,setOpen]=useState(true);
  return (
    <Dialog open={open} onClose={()=> setOpen(false)}>
      <Stack padding={"1rem"}>
            <DialogTitle>Find people</DialogTitle>
            <TextField 
            variant='outlined'
            label="search here"
            value={search.value}
            onChange={search.changeHandler}
            size='small'
            InputProps={{
              startAdornment:(
                <InputAdornment position='start'>
                  <SearchIcon/>
                </InputAdornment>
              )
            }}
            />
            <List>
              {
                user.map((e)=>{
                  return(
                    <UserItem
                  user={e}
                  key={e._id}
                  handler={addFriendHandler}
                  handlerIsLoading={isLoadingSendfriendRequist}
                  />
                  )
                })
              }
            </List>
      </Stack>
    </Dialog>
  )
}

export default SearchDialog
