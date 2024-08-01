import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Gallery(){

    return(
        <Grid container item xs={12} sx={{marginTop:"14rem"}} >
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "10px",
              }}
            >
              <Box
                sx={{
                  height: "2px",
                  width: "30px",
                  bgcolor: "rgba(100, 74, 0, 1)",
                }}
              ></Box>
            </Grid>
  
            <Grid item  >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "20px",
                  color: "rgba(100, 74, 0, 1)",
                }}
              >
               Gallery
              </Typography>
            </Grid>
  
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
              }}
            >
              <Box
                sx={{
                  height: "2px",
                  width: "30px",
                  bgcolor: "rgba(100, 74, 0, 1)",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
  
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              color: "rgba(0, 0, 0, 1)",
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
          World of Joy's Gallery
          </Typography>
        </Grid>
        </Grid>



    );
}