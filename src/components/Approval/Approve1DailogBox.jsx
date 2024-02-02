import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, DialogContentText, Paper } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Approve1DailogBox({
  openApprove,
  setOpenApprove,
  SetApproveStatus,
}) {
  const handleClose = () => {
    setOpenApprove(false);
  };
  const handleSubmit = () => {
    setOpenApprove(false);

    SetApproveStatus(true);
  };
  return (
    <React.Fragment>
      <Dialog
        open={openApprove}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure, you want to approve?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="text"
            sx={{
              color: "black",
              textTransform: "capitalize",
            }}

           
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            variant="text"
            sx={{
              color: "black",
              textTransform: "capitalize",
            }}
          >
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}