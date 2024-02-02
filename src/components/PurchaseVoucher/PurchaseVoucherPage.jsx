import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import React from "react";
import NavBar from "../NavBar/NavBar";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CommonDatePicker from "../common/DatePicker/CommonDatePicker";
import { useNavigate } from "react-router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { CheckBox } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import TableDetails from "./TableDetails";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const reportData = [
  {
    id: 1,
    title: "Requistion Number",
    icon: true,
    icon2: "",
    subData: [
      {
        column: [
          {
            field: "all",
            headerName: "All",
            renderCell: (params) => <Checkbox {...label} />,
            width: 20,
          },
          { field: "value", headerName: "Sigle Value", width: 30 },
        ],
        row: [
          { id: 1, value: 100366, all: <Checkbox {...label} /> },
          { id: 2, value: 100367, all: <Checkbox {...label} /> },
          { id: 3, value: 100368, all: <Checkbox {...label} /> },
          { id: 4, value: 100369, all: <Checkbox {...label} /> },
          { id: 5, value: 100365, all: <Checkbox {...label} /> },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Requistion Year",
    icon: true,
    icon2: "",

    subData: [
      {
        column: [{ field: "value", headerName: "Year", width: 30 }],
        row: [
          { id: 1, value: 2023 },
          { id: 2, value: 2024 },
          { id: 3, value: 2025 },
          { id: 4, value: 2026 },
          { id: 5, value: 2027 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Company Code",
    icon: true,

    // icon: false,
    // icon2: <SearchOutlinedIcon />,
    icon2: "",

    subData: [
      {
        column: [
          {
            field: "all",
            headerName: " ",
          },
          { field: "Company", headerName: "Company Name", width: 100 },
          { field: "city", headerName: "City" },
          { field: "Inr", headerName: " " },
        ],
        row: [
          {
            id: 1,
            Company: "ABC TEST12",
            all: "000",
            city: "Chandigarh",
            Inr: "INR",
          },
          {
            id: 2,
            Company: "SAP INDIA LTD",
            all: "0001",
            city: "Bangalore",
            Inr: "INR",
          },
          {
            id: 3,
            Company: "PADESALE ",
            all: "0201",
            city: "DHULE",
            Inr: "INR",
          },
          {
            id: 4,
            Company: "IS-B MUSTERBANK",
            all: "0200",
            city: "Waildorf",
            Inr: "ERU",
          },
          {
            id: 5,
            Company: "ABC TEST12",
            all: "000",
            city: "Chandigarh",
            Inr: "INR",
          },
          {
            id: 6,
            Company: "SAP INDIA LTD",
            all: "0001",
            city: "Bangalore",
            Inr: "INR",
          },
          {
            id: 7,
            Company: "PADESALE ",
            all: "0201",
            city: "DHULE",
            Inr: "INR",
          },
          {
            id: 8,
            Company: "IS-B MUSTERBANK",
            all: "0200",
            city: "Waildorf",
            Inr: "ERU",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Shoping Control No",
    icon: true,
    icon2: "",

    subData: [],
  },
  {
    id: 5,
    title: "Vendor ",
    icon: true,

    // icon: false,
    // icon2: <SearchOutlinedIcon />,
    icon2: "",

    subData: [
      {
        column: [
          {
            field: "country",
            headerName: "Country",
          },
          { field: "vendorCity", headerName: "City" },
          { field: "search", headerName: "Search Team" },
          { field: "name", headerName: "Name" },
          { field: "vendor", headerName: "Vendor" },
          { field: "code", headerName: "Code" },
        ],
        row: [
          {
            id: 1,
            vendorCity: "Jalandhar",
            country: "India",
            search: "fgd ",
            name: "RPL GT RD Jalandhar",
            vendor: "1157",
            code: "9001",
          },
        ],
      },
    ],
  },
  { id: 6, title: "Payment Due Date", icon: "", icon2: "", subData: [] },
  {
    id: 7,
    title: "Payment Code",
    icon: true,

    // icon: false,
    // icon2: <KeyboardArrowDownIcon />,
    icon2: "",

    // subData: [],

    subData: [
      {
        column: [{ field: "value", headerName: "Year", width: 30 }],
        row: [
          { id: 1, value: 2023 },
          { id: 2, value: 2024 },
          { id: 3, value: 2025 },
          { id: 4, value: 2026 },
          { id: 5, value: 2027 },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Charge Bearer",
    icon: true,

    // icon: false,
    // icon2: <KeyboardArrowDownIcon />,
    icon2: "",

    // subData: [],

    subData: [
      {
        column: [{ field: "value", headerName: "Year", width: 30 }],
        row: [
          { id: 1, value: 2023 },
          { id: 2, value: 2024 },
          { id: 3, value: 2025 },
          { id: 4, value: 2026 },
          { id: 5, value: 2027 },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Misc. Charge",
    icon: true,

    // icon: false,
    icon2: "",
    subData: [],
  },

  {
    id: 10,
    title: "Purpose Code",
    icon: true,

    // icon: false,
    // icon2: <AddCircleOutlinedIcon color="black" />,
    icon2: "",

    // subData: [],

    subData: [
      {
        column: [
          {
            field: "all",
            headerName: " ",
          },
          { field: "Company", headerName: "Company Name", width: 100 },
          { field: "city", headerName: "City" },
          { field: "Inr", headerName: " " },
        ],
        row: [
          {
            id: 1,
            Company: "ABC TEST12",
            all: "000",
            city: "Chandigarh",
            Inr: "INR",
          },
          {
            id: 2,
            Company: "SAP INDIA LTD",
            all: "0001",
            city: "Bangalore",
            Inr: "INR",
          },
          {
            id: 3,
            Company: "PADESALE ",
            all: "0201",
            city: "DHULE",
            Inr: "INR",
          },
          {
            id: 4,
            Company: "IS-B MUSTERBANK",
            all: "0200",
            city: "Waildorf",
            Inr: "ERU",
          },
          {
            id: 5,
            Company: "ABC TEST12",
            all: "000",
            city: "Chandigarh",
            Inr: "INR",
          },
          {
            id: 6,
            Company: "SAP INDIA LTD",
            all: "0001",
            city: "Bangalore",
            Inr: "INR",
          },
          {
            id: 7,
            Company: "PADESALE ",
            all: "0201",
            city: "DHULE",
            Inr: "INR",
          },
          {
            id: 8,
            Company: "IS-B MUSTERBANK",
            all: "0200",
            city: "Waildorf",
            Inr: "ERU",
          },
        ],
      },
    ],
  },
];

const PurchaseVoucherPage = () => {
  const [showSubDataBox, setShowSubDataBox] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [activeData, setActiveData] = React.useState(null);
  const [selectedRowData, setSelectedRowData] = React.useState(null);

  const navigate = useNavigate();
  const handleNavigateToPaymentApproval = () => {
    navigate("/purchaseDisplay");
  };
  const handleBackBtn = () => {
    navigate(-1);
  };
  const handleShowData = (row) => {
    setActiveData(row);

    setShowSubDataBox(true);
  };

  const onClickRowCell = (cellData) => {
    console.log("Clicked row data:", cellData);
    setSelectedRowData(cellData);
  };
  // const handleCloseBox = () => {
  //   setShowSubDataBox(false);
  // };

  // Define arrays to store column and row data
  const columnData = [];
  const rowData = [];

  // Iterate through the reportData
  reportData.forEach((report) => {
    // Check if subData exists and is not empty
    if (report.subData && report.subData.length > 0) {
      // Iterate through the subData
      report.subData.forEach((subData) => {
        // Check if column array exists and is not empty
        if (subData.column && subData.column.length > 0) {
          // Concatenate the column data to the columnData array
          columnData.push(...subData.column);
        }
        // Check if row array exists and is not empty
        if (subData.row && subData.row.length > 0) {
          // Concatenate the row data to the rowData array
          rowData.push(...subData.row);
        }
      });
    }
  });

  // Now columnData and rowData contain the extracted column and row data respectively
  console.log("Column Data:", columnData);
  console.log("Row Data:", rowData);

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
      {/* <Grid item xs={12} sm={12} md={12} lg={12}>
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
            Payment request voucher Details
          </Typography>
        </Box>
      </Grid> */}
      <Grid container mt={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {reportData.map((report) => {
            return (
              <Box
                sx={{
                  marginTop: 1,
                  marginLeft: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={report.id}
              >
                <Typography
                  sx={{ ml: "20px", fontSize: "16px" }}
                  variant="body2"
                  align="left"
                >
                  {report.title}
                </Typography>
                {report.title === "Payment Due Date" ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CommonDatePicker /> TO
                    <CommonDatePicker />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      ml: "50px",
                    }}
                  >
                    <TextField
                      value={selectedRowData ? selectedRowData : ""}
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
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{
                              width: "25px",
                              height: "25px",
                              backgroundColor: "white",
                              boxShadow: report.icon2 ? 1 : 0,
                            }}
                            onClick={() => handleShowData(report.subData[0])}
                          >
                            {report.icon2}
                          </InputAdornment>
                        ),
                      }}
                    />

                    {report.icon === true ? (
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
                      >
                        <CreateNewFolderIcon
                          onClick={() => handleShowData(report.subData[0])}
                          sx={{
                            color: "green",
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                        }}
                      ></Box>
                    )}

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
                    >
                      <CreateNewFolderIcon
                        sx={{
                          color: "green",
                        }}
                      />
                    </Box> */}
                  </Box>
                )}
              </Box>
            );
          })}
        </Grid>

        {/* <Box
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
                <TextField
                    sx={{
                      backgroundColor: "white",
                      width: "280px",
                      border: "none",
                      borderRadius: "10px",
                      boxShadow: 1,
                      "&:hover": {
                        border: "none",
                      },
                    }}
                  />
                <CommonDatePicker /> TO
                <CommonDatePicker />
              </Box>
            </Box> */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box>
            {showSubDataBox && activeData && (
              <div
                style={{
                  height: "400px",
                  width: "500px",
                  marginLeft: "10px",
                  boxShadow: 1,
                }}
              >
                <TableDetails
                  columnData={activeData.column}
                  rowData={activeData.row}
                  onClickRowCell={onClickRowCell}
                />
                {/* <DataGrid
                  rows={rowData}
                  columns={columnData.map((col) => ({
                    ...col,
                   
                    Headers: (props) => (
                      <DataGrid.components.Header {...props} sx={{ backgroundColor: "red", color: "#FFFFFF" }} />
                    ),
                  }))}
                  pageSize={rowData.length} // Set pageSize to the total number of rows to effectively disable pagination
                  components={{
                    Pagination: () => null, // This will render nothing for pagination

                  }}
                  disableColumnFilter
                  disableColumnMenu
                  disableDensitySelector
                  disableRowSelectionOnClick
                  disableColumnSelector
                  disableVirtualization
                  disableEval
                  classes={{
                    columnHeader: 'red-column-header',
                  }}
                /> */}
              </div>
            )}

            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2B2861",
                  borderRadius: "25px",
                  width: "150px",
                  position: "relative",
                  top: "600px",
                  zIndex: 9000,
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

export default PurchaseVoucherPage;

{
  /* {report.title === "Shoping Control No" ||
                report.title === "Requistion Year" ||
                report.title === "Requistion Number" ? (
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
                    >
                      <CreateNewFolderIcon
                        sx={{
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CommonDatePicker /> TO
                    <CommonDatePicker />
                  </Box>
                )} */
}
