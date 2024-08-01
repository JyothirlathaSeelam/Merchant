import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";


export default function Pricedetails() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const UnitPriceTableCell = styled(StyledTableCell)({
    borderRight: "1px solid black",
  });

  const EnquireTableCell = styled(StyledTableCell)({
    borderRight: "none", // No right border for Enquire column
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:last-child td, &:last-child th": {
      borderBottom: 0,
    },
  }));

  function createData(unit, price, enquire) {
    return { unit, price, enquire };
  }

  const rows = [
    createData("Studio", "19 Lacs* Onwards"),
    createData("1 BHK", "28 Lacs* Onwards"),
    createData("1 BHK Regular", "45 Lacs* Onwards"),
    createData("2 BHK Large", "48 Lacs* Onwards"),
    createData("2 BHK Regular", "54 Lacs* Onwards"),
    createData("1 BHK Regular", "57 Lacs* Onwards"),
  ];

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "rgba(249, 184, 0, 1)",
      borderColor: "rgba(249, 184, 0, 1)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(249, 184, 0, 1)",
      borderColor: "rgba(249, 184, 0, 1)",
    },
  });

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "20px",
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ position: "relative", height: "100%", width: "100%" }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/1d62/8f07/9a0934a7f12c31c1d316192084d812da?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WprOpyk61Q3r5MwN~qD2cua5ui5Aa222r1d~gGPN0wv0iS9tfXGBkRJDYg7V7ZG~dfUu9j5vcl~AfrP6HjBZbnEJr1XNuQ5ENrYvqN3oN0HCIdnHcAHEMoV~XpYCh4QZNQYtNSy8WodUjjweaTrckA179gNwIFUbXkWplbi1qvnIaptAi-ffq85IFYzDWTyI-9RCOa1KLWArI5W5KSIE6qhx7zXVsbsR~8BfGt3Q0OeJ6sdyZsw5gJq4oyfijXM7XszH1a3O9~aEnDf5q2fifRixD-IeDWH2vLQ0UuZlDsOoLhLjeaHGuKFJWUbeb0YII0WBptaEAXl7DV83a9fv3Q__"
          alt="not  found"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          bgcolor: "rgba(0, 0, 0, 0.68)",
          height: "100%",
          width: "100%",
        }}
      >
        
        
      </Grid>

      <Grid item xs={12} sx={{ position: "absolute" }}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
        >
          

         <Grid
            item
            xs={2}
          >
            <Box
              sx={{
                height: "2px",
                width: "30px",
                bgcolor: "rgba(249, 184, 0, 1)",
                margin: "10px 0px 0px 0px",
              }}
            ></Box>
         
          </Grid>

          <Grid item >
            <Typography
              variant="h3"
              sx={{ fontSize: "20px", color: "rgba(249, 184, 0, 1)" }}
            >
              Price details
            </Typography>
          </Grid>

          <Grid
            item
            xs={1}
          >
            <Box
              sx={{
                height: "2px",
                width: "30px",
                bgcolor: "rgba(249, 184, 0, 1)",
                margin: "10px 0px 0px 9px",
              }}
            ></Box>
         
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              color: "rgba(255, 255, 255, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            Configurations
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          width: "76%",
          marginTop: "16rem",
        }}
      >
        <TableContainer component={Paper} sx={{ borderRadius: "15px" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <UnitPriceTableCell
                  sx={{
                    fontSize: "24px",
                    padding: "25px 20px",
                    color: "rgba(0, 0, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    textAlign: "center",
                  }}
                >
                  Unit Type
                </UnitPriceTableCell>
                <UnitPriceTableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    color: "rgba(0, 0, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    textAlign: "center",
                  }}
                >
                  Price
                </UnitPriceTableCell>
                <StyledTableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    color: "rgba(0, 0, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    textAlign: "center",
                  }}
                >
                  Enquire
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.unit}>
                  <UnitPriceTableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      textAlign: "center",
                    }}
                  >
                    {row.unit}
                  </UnitPriceTableCell>
                  <UnitPriceTableCell
                    align="right"
                    sx={{
                      fontSize: "20px",
                      textAlign: "center",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {row.price}
                  </UnitPriceTableCell>
                  <EnquireTableCell align="right" sx={{ textAlign: "center" }}>
                    <Stack direction="row" justifyContent="center">
                      <BootstrapButton
                        variant="contained"
                        disableRipple
                        sx={{
                          color: "rgba(0, 0, 0, 1)",
                          bgcolor: "rgba(249, 184, 0, 1)",
                          borderColor: "rgba(249, 184, 0, 1)",
                          fontSize: "20px",
                          padding: "13px 33px",
                          borderRadius: "10px",
                        }}
                      >
                        Enquire now
                      </BootstrapButton>
                    </Stack>
                  </EnquireTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
