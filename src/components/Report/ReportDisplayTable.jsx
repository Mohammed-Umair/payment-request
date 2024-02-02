import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Report from "../../assets/Report.jpeg";
import { SafetyDivider } from "@mui/icons-material";
import { reportDetailsData } from "../../utils/reportData";
import ReportDetailTable from "./ReportDetailTable";

function createData(id, vender, date) {
  return { id, vender, date };
}

const rows = [
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
  createData(90, 1007395263589236, "28-09-2023"),
];

function DetailsData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const DetailsRows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ReportDisplayTable() {
  const [showPdfBox, setShowPdfBox] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const navigate = useNavigate();

  const handleClickPdf = (row) => {
    setSelectedRow(row);
    setShowPdfBox(true);
  };

  const handleClosePdfBox = () => {
    setShowPdfBox(false);
  };

  return (
    <>
      <TableContainer sx={{}}>
        <Table sx={{ width: 420, boxShadow: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#2B2861",
                color: "#FFFFFF",
              }}
            >
              <TableCell style={{ color: "#FFFFFF" }} align="center">
                Serial No
              </TableCell>
              <TableCell style={{ color: "#FFFFFF" }} align="center">
                Transition id
              </TableCell>

              <TableCell style={{ color: "#FFFFFF" }} align="center">
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  size="small"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  align="center"
                  size="small"
                  onClick={() => handleClickPdf(row)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {row.vender}
                </TableCell>
                <TableCell align="center" size="small">
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showPdfBox && (
        <Box
          sx={{
            position: "absolute",
            right: "10px",
            top: "150px",
            padding: 1,
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 1,
            width: "790px",
            height: "auto",
          }}
        >
          <Box
            sx={{
              padding: 2,
              border: "2px solid black",
            }}
          >
            <Box
              sx={{
                width: "350px",
                ml: "220px",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Payment request voucher
                <Divider
                  sx={{
                    width: "100%",
                  }}
                >
                  Report
                </Divider>
              </Typography>
            </Box>

            <Box>
              <ReportDetailTable />
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    {reportDetailsData?.map((item) => {
                      return (
                        <>
                          <p
                            key={item.id}
                            style={{
                              // fontWeight: "bold",
                            }}
                          >
                            {item.title}:
                          </p>

                          <Divider />
                        </>
                      );
                    })}
                  </Box>

                  <Box
                    sx={{
                      // ml: "30px",
                    }}
                  >
                    {reportDetailsData?.map((item) => {
                      return (
                        <>
                          <p key={item.id}>{item.value}</p>

                          <Divider />
                        </>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    {reportDetailsData?.map((item) => {
                      return (
                        <>
                          <p
                            key={item.id}
                            style={{
                              // fontWeight: "bold",
                              marginRight: "30px",
                            }}
                          >
                            {item.title}:
                          </p>

                          <Divider />
                        </>
                      );
                    })}
                  </Box>
                  <Box>
                    {reportDetailsData?.map((item) => {
                      return (
                        <>
                          <p key={item.id}>{item.title}</p>

                          <Divider />
                        </>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box> */}
          </Box>
          {/* <div
            style={{
              width: "500px",
              height: "480px",
              border: "2px solid black",
            }}
          >
            <img
              src={Report}
              alt="report"
              srcset=""
              style={{
                width: "495px",
                height: "475px",
              }}
            />
          </div> */}
        </Box>
      )}
    </>
  );
}
