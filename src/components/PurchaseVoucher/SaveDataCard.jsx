import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
export default function SaveDataCard({ ApproveStatus, SetApproveStatus }) {
  const handleClose = () => {
    SetApproveStatus(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={ApproveStatus}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="center">
          <Typography
            variant="h5"
            sx={{
              mt: "30px",
              fontWeight: "bold",
            }}
          >
            Transaction ID Created Successfully
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            width: "400px",
            height: "120px",
            textAlign: "center",
          }}
        >
         
          <DialogContentText id="alert-dialog-description" align="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 3,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "whitesmoke",
                  border: "3px solid blue",
              borderRadius: "50%", 
              }}
            >
              <SyncAltIcon
                sx={{
                  fontWeight: "900",
                  color: "blue",
                  width: "40px",
                  height: "40px",
                }}
              />
            </IconButton>
          </DialogContentText>
          <Typography
            variant="h6"
            sx={{
              mt: "20px",
              fontWeight: "bold",
            }}
          >
            0000000000654675365
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
