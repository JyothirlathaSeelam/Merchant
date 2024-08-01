import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar() {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "15px 18px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    borderRadius: "10px",
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
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <AppBar position="fixed" sx={{ bgcolor: "rgba(0, 0, 0, 1)", height: "9%" }}>
      <Toolbar>
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={2}>
            <Grid item xs={9}>
              <img
                src="https://s3-alpha-sig.figma.com/img/1a46/5e0b/f90e01da52847a0bb6568ff0c7755e0b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtWCYWuB8OJKo54rW8YDobC4oFisCnyeN4e8OmZ0QRRgOjkJsHPlvN0wE8ePu5dQ-7~aVXakZXUm7elySHH5feZZqDlpSAA7nhtAmIv58QDApUx~7DIvP4io-JwWbKbI5~68yXVAXwAMBxzdgBfJ7molSpEgTu2CRK--TE23qady-uHwgmpNPPVh7e7auHPWe2I9XeN5mWLP6fy6u0HnoieAzgHqJyg~37pgW2nPztur1Vl-HczEo6~FQvLx3p3mXgIRLGunYZ95f0FT0fcXDo5S2Pn0AiIi9awU2xMDbyAVkiSenjxuOALwQkUvq3tHceCBOlZJTcSLwSRIRWv8dg__"
                alt="not found"
                style={{ height: "20%", width: "70%",marginTop:"10px" }}
              />
            </Grid>
          </Grid>

          <Grid item xs={2}>
          <Grid item xs={11}>

            <BootstrapButton variant="contained" disableRipple>
              Project Highlights
            </BootstrapButton>
          </Grid>
          </Grid>

          <Grid item xs={1}>
            <Grid item xs={2}>
              <NavLink to="/overview" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 1)",
                    textDecoration: "none",
                  }}
                >
                  Overview
                </Typography>
              </NavLink>
            </Grid>
          </Grid>

          <Grid item xs={1}>
            <Grid item xs={11}>
              <NavLink to="/pricedetails" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
                >
                  Price details
                </Typography>
              </NavLink>
            </Grid>
          </Grid>

          <Grid item xs={1} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={4}>
              <NavLink
                to="/Projecthighlights"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
                >
                  Amenities
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
          <Grid item xs={1} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h1"
              component="h2"
              sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
            >
              Gallery
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Grid
              item
              xs={10}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
              >
                Location Advantages
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid
              item
              xs={10}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
              >
                Walkthrough Video
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
