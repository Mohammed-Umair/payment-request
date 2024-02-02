import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { Typography } from "@mui/material";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function DeleteCard({ setDeleteStatus, deleteStatus }) {
  const handleClose = () => {
    setDeleteStatus(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={deleteStatus}
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
            Delete Successfully
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            width: "400px",
            height: "120px",
          }}
        >
          <DialogContentText id="alert-dialog-description" align="center">
            <DeleteForeverIcon
              sx={{
                fontWeight: "900",
                color: "orange",
                width: "60px",
                height: "60px",
              }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
