import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Overview() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <Grid
        item
        xs={5}
        sx={{
          border: "1px solid black",
          margin: "28px  0px 20px 50px",
          borderRadius: "6px",
          height: "10%",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            border: "1px solid rgba(255, 255, 255, 1)",
            position: "absolute",
            height: "50%",
            width: "2%",
            bgcolor: "rgba(255, 255, 255, 1)",
            margin: "5rem 0rem 0rem 46rem",
          }}
        ></Grid>

        <Grid item xs={10} sx={{ display: "flex" }}>
          <Grid item xs={1}>
            <Box
              sx={{
                height: "2px",
                width: "20px",
                bgcolor: "rgba(149, 110, 0, 1)",
                margin: "47px 0px 0px 40px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                color: "rgba(149, 110, 0, 1)",
                textAlign: "left",
                padding: "38px 0px 7px 15px",
              }}
            >
              Overview
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Box
              sx={{
                height: "2px",
                width: "20px",
                bgcolor: "rgba(149, 110, 0, 1)",
                margin: "47px 0px 0px 0px",
              }}
            ></Box>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              color: "rgba(0, 0, 0, 1)",
              textAlign: "left",
              padding: "15px 0px 10px 25px",
            }}
          >
            About world of joy
          </Typography>
        </Grid>

        <Grid item xs={11} sx={{ display: "flex" }}>
          <Grid item xs={1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Blue_diamond.png/1200px-Blue_diamond.png"
              alt="not found"
              style={{
                height: "6%",
                width: "16%",
                padding: "48px 0px 0px 20px ",
              }}
            />
          </Grid>

          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "43px 0px 30px 5px",
                lineHeight: "22px",
              }}
            >
              Urbanrise The World of Joy constructed in an alluring green
              environment spread over 10.13 acres of land these aspirational
              Siruseri flats built with the latest MIVAN technology are all
              about living life king size. Strategically located just 10 minutes
              from Sholinganallur.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={11} sx={{ display: "flex" }}>
          <Grid item xs={1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Blue_diamond.png/1200px-Blue_diamond.png"
              alt="not found"
              style={{
                height: "6%",
                width: "16%",
                margin: "20px 0px 0px 20px ",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "10px 0px 50px 5px",
                lineHeight: "22px",
              }}
            >
              The 43,000 sq.ft magnificent clubhouse offers an array of
              jaw-dropping amenities right from Work, Workout to gaming and
              grooming, the banquet hall offers the perfect space and ambiance
              for parties, the co-working spaces and board rooms are a boon to
              residents working from Home.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid
          item
          xs={12}
          sx={{ height: "60vh", width: "100vw", marginLeft: "5rem" }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/7630/d0ce/1fba109e80a643c035fbf57552ec81e9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJXarwcsg-IaPBPTdlLbevsXIxw7KgJT4WzAFtyq-lNLndMsCoDEV6hUYLKCjN8n3EQ6S5XPpBy1pGwf-4sPY9P9BrWe74xfvofTlkCJkD2lasWOyhcGk6OHT3EwmEciXcqRbWkDQ2b9hVLZN24lOAdRIW2UAOyzAfAyyKN~nFLAOfrs5V2gpy7JwP6LC9EPYNKWzHjGSOmuxe7CpFmeXzrKz~Vnc5RRa9Oc-7Qyy3Mgme7ANeUL7LQvEQUU1KSUFjdldgO5KzFwY9Kw8xdAcvorL5xN2SV3ePyRwpLsnXhnMwEYOMAl5cYC3vkwi4zquAeiprVmzL4uYzrJu7x5AQ__"
            alt="not found"
            style={{
              height: "100%",
              width: "100%",
              margin: "10px 0px 0px 24px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
