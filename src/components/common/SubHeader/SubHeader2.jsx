import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router';
const SubHeader2 = ({HandleApprove,handleApprovalReject,title}) => {
const navigate= useNavigate()

  const handleNavigateToHome=()=>{
    navigate("/home")
  }
  return (
    <AppBar position="static">
        <Toolbar sx={{
            backgroundColor:"lightgray",
            color:"black",
            boxShadow:"none"
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <KeyboardBackspaceIcon  onClick={handleNavigateToHome}/>
          </IconButton>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="h6" component="div" sx={{
            flexGrow:1
          }}>
            Common Ref No:19090
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4,
                width:"30px",
                height:"30px",
                borderRadius:"50%",
                backgroundColor:"whitesmoke"
             }}
             onClick={handleApprovalReject}

          >
            <ClearIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,
                width:"30px",
                height:"30px",
                borderRadius:"50%",
                backgroundColor:"whitesmoke"
             }}

             onClick={HandleApprove}
          >
            <CheckIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>

  )
}

export default SubHeader2