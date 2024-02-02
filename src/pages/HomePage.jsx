import React from "react";
import {
  Button,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  useTheme,
  TextField,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UpdateIcon from "@mui/icons-material/Update";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import background from "../assets/background.jpeg" 


const backgroundImageStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const HomePage = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/selectUserPage");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",

        ...backgroundImageStyle,
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginLeft: "20px",
            position: "relative",
            left: "280px",
          }}
        >
          <Typography
            variant="body1"
            align="left"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Please sign in to continue
          </Typography>
          <form>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                margin: "0 20px",
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ mr: 1, my: 0.5 }} />
              <TextField fullWidth variant="standard" label="Username" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                margin: "0 20px",
              }}
            >
              <LockOutlinedIcon sx={{ mr: 1, my: 0.5 }} />
              <TextField
                sx={{ mt: 2, border: "none" }}
                fullWidth
                variant="standard"
                label="Password"
              />
            </Box>
            <Grid
              container
              justifyContent="space-between"
              style={{ marginTop: "10px" }}
            >
              <Grid item>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    color: "red",
                  }}
                  // onClick={handleNavigateToRegister}
                >
                  Forget Username
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    color: "red",
                  }}

                  // onClick={handleNavigateToForget}
                >
                  Forgot Password
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              style={{ marginTop: "10px" }}
            >
              <Typography
                variant="h6"
                align="left"
                gutterBottom
                marginLeft="5px"
              >
                S8sqsts
              </Typography>

              <UpdateIcon
                sx={{
                  marginTop: "30px",
                }}
              />
            </Grid>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                bgcolor: "#83493E",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "#83493E",
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
