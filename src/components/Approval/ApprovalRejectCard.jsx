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
import { Box, Paper } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ApprovalRejectCard({
  setApproveReject,
  ApproveReject,
  SetRejectStatus,
}) {
  const [InputValue, setInputValue] = React.useState("");

  const handleClose = () => {
    setApproveReject(false);
  };
  const handleSubmit = () => {
    setApproveReject(false);
    SetRejectStatus(true)

  };
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={ApproveReject}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            alignItems: "center",
            display: "flex",
            color: "blue",
          }}
          id="customized-dialog-title"
        >
          {/* <KeyboardBackspaceIcon
            sx={{
              fontWeight: "bold",
            }}
          /> */}
          <Typography
            sx={{
              paddingLeft: 1,
            }}
          >
            Reason For Rejection
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            sx={{
              width: "400px",
              height: "120px",
            }}
            component={Paper}
          >
            <textarea
              name=""
              id=""
              cols="50"
              rows="7"
              placeholder="Enter The Reason For Rejection (Max 300 Characters Allowed*"
              style={{
                marginLeft: "5px",
                marginTop: "5px",
              }}
              onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSubmit}
            variant="contained"
            color="inherit"
            sx={{
              borderRadius: "10px",
              textTransform: "capitalize",
            }}
          >
            <HighlightOffIcon sx={{}} /> Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "red",
              borderRadius: "10px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            disabled={!InputValue}
          >
            <HelpCenterIcon /> Reject
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
