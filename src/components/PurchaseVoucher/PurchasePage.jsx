import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CommonDatePicker from "../common/DatePicker/CommonDatePicker";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useNavigate } from "react-router";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const reportData = [
  { id: 1, title: "Transition Number" },
  { id: 2, title: "Requistion Number" },
  { id: 3, title: "Requistion Year" },
  { id: 4, title: "Company Code" },
  { id: 5, title: "Shoping Control No" },
  { id: 6, title: "Vendor " },
  { id: 7, title: "Payment Due Date" },
  { id: 8, title: "Pay Code" },
  { id: 9, title: "Purpose Code" },
];

const TransitionNumber = [
  { title: 100366, year: 1994 },
  { title: 100367, year: 1972 },
  { title: 100368, year: 1974 },
  { title: 100369, year: 2008 },
  { title: 100365, year: 1957 },
];
const TransitionYear = [
  { title: 2023, year: 1994 },
  { title: 2022, year: 1972 },
  { title: 2024, year: 1974 },
  { title: 2025, year: 2008 },
  { title: 2026, year: 1957 },
];

const CompanyCode = [
  {
    id: 1,
    Company: "ABC TEST12",
    all: "000",
    city: "Chandigarh",
    Inr: "INR",
  },
  {
    id: 2,
    Company: "ABC TEST12",
    all: "0001",
    city: "Chandigarh",
    Inr: "INR",
  },
  {
    id: 3,
    Company: "ABC TEST12",
    all: "0002",
    city: "Chandigarh",
    Inr: "INR",
  },
  {
    id: 4,
    Company: "ABC TEST12",
    all: "0003",
    city: "Chandigarh",
    Inr: "INR",
  },
];

const VendorOption = [
  {
    id: 1,
    vendor: "1157",
    vendorCity: "Jalandhar",
    country: "India",
    search: "fgd ",
    name: "RPL GT RD Jalandhar",
    code: "9001",
  },
];
const PurchasePage = () => {
  const navigate = useNavigate();
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const handleNavigateToPaymentApproval = () => {
    navigate("/purchaseDisplay");
  };
  const handleBackBtn = () => {
    navigate(-1);
  };
  const handleCreateNewFolder = () => {
    setAutocompleteOpen(true);
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NavBar />
      </Grid>

      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "lightgray",
            color: "black",
            boxShadow: "none",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 1,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "whitesmoke",
            }}
            onClick={handleBackBtn}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Payment request voucher Details
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
            }}
          ></Box>

          {/* <Typography variant="h6" component="div">
            Back{" "}
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Grid container mt={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Requistion Number
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                multiple
                // id="checkboxes-tags-demo"
                options={TransitionNumber}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                freeSolo
                // open={autocompleteOpen}
                // onClose={() => setAutocompleteOpen(false)}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                style={{ width: 350 }}
                renderInput={(params) => <TextField {...params} />}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Requistion Year
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={TransitionYear.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} />}
                style={{ width: 350 }}
              />

              {/* <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box> */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Company Code
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                // id="checkboxes-tags-demo"
                options={CompanyCode}
                disableCloseOnSelect
                getOptionLabel={(option) => option.all}
                freeSolo
                // open={autocompleteOpen}
                // onClose={() => setAutocompleteOpen(false)}
                renderOption={(props, option, { selected }) => (
                  <TableContainer {...props}>
                    <Table sx={{ minWidth: 340 }} aria-label="simple table">
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          size="small"
                        >
                          <TableCell component="th" scope="row" size="small">
                            {option.all}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.Company}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.city}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.Inr}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                style={{ width: 350 }}
                renderInput={(params) => <TextField {...params} />}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Shoping Control No
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "50px",
              }}
            >
              <TextField
                sx={{
                  backgroundColor: "white",
                  width: "350px",
                  border: "none",
                  borderRadius: "10px",
                  "&:hover": {
                    border: "none",
                  },
                }}
              />

              {/* <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                  backgroundColor: "white",
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
                  }}
                />
              </Box> */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                }}
              ></Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Vendor
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                // id="checkboxes-tags-demo"
                options={VendorOption}
                disableCloseOnSelect
                getOptionLabel={(option) => option.vendor}
                freeSolo
                // open={autocompleteOpen}
                // onClose={() => setAutocompleteOpen(false)}
                renderOption={(props, option, { selected }) => (
                  <TableContainer {...props}>
                    <Table sx={{ minWidth: 340 }} aria-label="simple table">
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          size="small"
                        >
                          <TableCell component="th" scope="row" size="small">
                            {option.vendor}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.vendorCity}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.search}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.name}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.country}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.code}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                style={{ width: 350 }}
                renderInput={(params) => <TextField {...params} />}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Payment Due Date
            </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width:"350px",
              marginRight:"50px"
            }}
          >
            <CommonDatePicker /> TO
            <CommonDatePicker />
          </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Payment Code
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                id="free-solo-demo"
                options={TransitionYear.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} />}
                style={{ width: 350 }}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box>
              {/* <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                }}
              ></Box> */}
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
             Charge Bearer
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                id="free-solo-demo"
                options={TransitionYear.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} />}
                style={{ width: 350 }}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box>
              {/* <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                }}
              ></Box> */}
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
              Misc. Charge
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "50px",
              }}
            >
              <TextField
                sx={{
                  backgroundColor: "white",
                  width: "350px",
                  border: "none",
                  borderRadius: "10px",
                  "&:hover": {
                    border: "none",
                  },
                }}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                  backgroundColor: "white",
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
                  }}
                />
              </Box>
              {/* <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  ml: "10px",
                }}
              ></Box> */}
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 1,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontSize: "16px" }}
              variant="body2"
              align="left"
            >
             Purpose Code
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                ml: "30px",
              }}
            >
              <Autocomplete
                // id="checkboxes-tags-demo"
                options={CompanyCode}
                disableCloseOnSelect
                getOptionLabel={(option) => option.all}
                freeSolo
                // open={autocompleteOpen}
                // onClose={() => setAutocompleteOpen(false)}
                renderOption={(props, option, { selected }) => (
                  <TableContainer {...props}>
                    <Table sx={{ minWidth: 340 }} aria-label="simple table">
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          size="small"
                        >
                          <TableCell component="th" scope="row" size="small">
                            {option.all}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.Company}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.city}
                          </TableCell>
                          <TableCell component="th" scope="row" size="small">
                            {option.Inr}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                style={{ width: 350 }}
                renderInput={(params) => <TextField {...params} />}
              />

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  ml: "10px",
                  borderRadius: "10px",
                  boxShadow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                // onClick={handleCreateNewFolder}
              >
                <CreateNewFolderIcon
                  sx={{
                    color: "green",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CommonDatePicker /> TO
              <CommonDatePicker />
            </Box> */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{}}>
            <Box>image</Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2B2861",
                  borderRadius: "25px",
                  width: "150px",
                  position: "relative",
                  top: "390px",
                  "&:hover": {
                    backgroundColor: "#2B2861",
                  },
                }}
                onClick={handleNavigateToPaymentApproval}
              >
                Display
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PurchasePage;
