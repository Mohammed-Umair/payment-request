import {
    Box,
    Button,
    Grid,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import NavBar from "../NavBar/NavBar";
  import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
  import CommonDatePicker from "../common/DatePicker/CommonDatePicker";
  import { useNavigate } from "react-router";
  
  const DelectionPage = () => {
    const navigate = useNavigate();
    const handleNavigateToPaymentApproval = () => {
      navigate("/delectionDisplay");
    };
  
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <NavBar />
        </Grid>
  
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              mt: 1,
            }}
          >
            <Typography
              sx={{ ml: "20px", fontWeight: "bold" }}
              variant="h5"
              align="left"
            >
              Payment request voucher Approval 1{" "}
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                marginLeft: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography
                sx={{ ml: "20px", fontWeight: "600" }}
                variant="h6"
                align="left"
              >
                Transition id
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: "white",
                    width: "360px",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: 1,
                    "&:hover": {
                      border: "none",
                    },
                  }}
                />
  
                <Box
                  sx={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "white",
                    ml: "10px",
                    borderRadius: "10px",
                    boxShadow: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <CreateNewFolderIcon
                    sx={{
                      color: "green",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                marginLeft: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography
                sx={{ ml: "20px", fontWeight: "600" }}
                variant="h6"
                align="left"
              >
                Transition Date
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <TextField
                  sx={{
                    backgroundColor: "white",
                    width: "280px",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: 1,y
                    "&:hover": {
                      border: "none",
                    },
                  }}
                /> */}
                <CommonDatePicker /> TO
                <CommonDatePicker />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                marginLeft: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography
                sx={{ ml: "20px", fontWeight: "600" }}
                variant="h6"
                align="left"
              >
                PRV no.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: "white",
                    width: "360px",
  
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: 1,
                    "&:hover": {
                      border: "none",
                    },
                  }}
                />
  
                <Box
                  sx={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "white",
                    ml: "10px",
                    borderRadius: "10px",
                    boxShadow: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <CreateNewFolderIcon
                    sx={{
                      color: "green",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Image
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2B2861",
                  borderRadius: "25px",
                  width: "150px",
                  position: "relative",
                  top: "200px",
                  "&:hover": {
                    backgroundColor: "#2B2861",
                  },
                }}
                onClick={handleNavigateToPaymentApproval}
              >
                Display
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  
  export default DelectionPage;
  