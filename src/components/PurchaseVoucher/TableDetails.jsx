import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TableDetails = ({ rowData, columnData,onClickRowCell  }) => {
  return (
    <TableContainer sx={{}}>
      <Table sx={{ width: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#2B2861",
              color: "#FFFFFF",
            }}
          >
            {columnData.map((col) => {
              return (
                <TableCell
                  style={{
                    color: "#FFFFFF",
                  }}
                  align="center"
                >
                  {col.headerName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.all && (
                <TableCell
                  align="center"
                  size="small"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => onClickRowCell(row.value)}
                >
                  {row.all}
                </TableCell>
              )}
              {row.value && (
                <TableCell
                  align="center"
                  size="small"
                  onClick={() => onClickRowCell(row.value)}

                >
                  {row.value}
                </TableCell>
              )}

              {row.Company && (
                <TableCell
                  align="center"
                  size="small"
                  onClick={() => onClickRowCell(row.all)}

                >
                  {row.Company}
                </TableCell>
              )}

              {row.city && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.city}
                </TableCell>
              )}

              {row.Inr && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.Inr}
                </TableCell>
              )}
              {row.country && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.country}
                </TableCell>
              )}
              {row.vendorCity && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.vendorCity}
                </TableCell>
              )}
              {row.search && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.search}
                </TableCell>
              )}

              {row.name && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.name}
                </TableCell>
              )}
              {row.vendor && (
                <TableCell
                  align="center"
                  size="small"
                  onClick={() => onClickRowCell(row.vendor)}

                >
                  {row.vendor}
                </TableCell>
              )}
              {row.code && (
                <TableCell
                  align="center"
                  size="small"
                  // onClick={() => handleClickPdf(row)}
                >
                  {row.code}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDetails;
