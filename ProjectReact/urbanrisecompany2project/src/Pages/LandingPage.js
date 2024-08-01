import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";

export default function LandingPage() {
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
    <Grid container xs={12} sx={{ display: "flex", alignItems: "center", position: "relative" }}>
      <Grid
        container
        item
        xs={12}
        sx={{ position: "relative", height: "100vh", width: "100vw" }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/a9a0/cfc8/c6b1ac45a905ae38792942f4cbaa4817?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a9c6x5gDzexxgN3P0G32c~9Jbf-Itf2oP~BhQh3y0pka0icQdrqtRkOzh5azjcV2ptFI-KbeTf~rdX9jI0XkAOiitBq8BT9K2zMQivF0MP9f29X~XHRT7X7gMafXfG~WSls5Iq~rLYMqiT9f5ee1moxO8nbk4peL~Um5B9si8js5E9g19GaUtc69NJ-JMJjsDedRPwoxDLsh-su55eMSSi7~DNglM~U2rCVoE5YRV96uq3G3Ni7LRijT1gNChmvpQKDF5n-0r~FbaSrDuzwUMkDuSWNlq5zoirYpvM-mdAYoHU1LYSiylN-R75hPkPw82WxhAkSG-9~o4IyYxj9biw__"
          alt="not found"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
         
          }}
        />
        <Grid
          container
          item
          xs={12}
          sx={{
            position: "absolute",
            
            bgcolor: "rgba(0, 0, 0, 0.68)",
            height: "100%",
            width: "100%",
          }}
        ></Grid>
      </Grid>

      <Grid
        container
        item
        xs={11}
        sx={{
          position: "absolute",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={11}
          sx={{
            bgcolor: "rgba(0, 108, 181, 0.2)",
            border: "1px solid rgba(0, 108, 181, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
          }}
        >
          <Grid item xs={8} sx={{ margin: "10px 0px 10px 0px" }}>
            <Grid item xs={3}>
              <img
                src="https://s3-alpha-sig.figma.com/img/a0b3/54a4/757efaded751cc99375937b01f847c38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e34WMMsRPacdPAghd2dHT~rU2LklWCFHSjzYqJqcMOpfEUzzWXmxC6joE7bZW4hnBM~gm6U1GGudrZtAeo7VrPvrIptZhQoIqr89AHsBBi-1IL7YVHhZkv6OFTn2NOO3nY6kAcPVr0-VE5wsBZX4gFdvfYjKx1IcNZFYkbfvuhOBH8~5nwc-pvN9Jr-6Fe-qlYedNhE881Tb~6c99EvBvt1lAKnap9Ht7vSD5lZQhWRkUz~p5DV6aH7N7~Nw4r7BksVKT4zERgbBDOb-DnZknUzT4G4xxzNS-NpA5DnzjqUA5zTNcqHhhVaPiUBbUf6GDt7uiWLvMxH3KqHX~Gcsrg__"
                alt="not found"
                style={{ width: "58%", margin: "10px 30px 40px 0px" }}
              />
            </Grid>

            <Grid item xs={7}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "36px",
                  color: "rgba(249, 184, 0, 1)",
                  textAlign: "left",
                  padding: "15px 0px 10px 35px",
                }}
              >
                DESIGNED TO MEET YOUR EVERY DESIRE!
              </Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "28px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "left",
                  padding: "15px 0px 40px 35px",
                }}
              >
                Launching 1,2 & 3 BHK Premium Gated Community Apartments at
                Siruseri, OMR with 150+ Amenities.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              border: "1px solid rgba(253, 253, 253, 1)",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
              borderTopColor: "rgba(0, 108, 181, 1)",
              borderRadius: "30px",
              bgcolor: "rgba(253, 253, 253, 1)",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                border: "10px solid rgba(0, 108, 181, 1)",
                bgcolor: "rgba(0, 108, 181, 1)",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                margin: "0px 0px 20px 0px",
              }}
            ></Grid>

            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: "rgba(0, 108, 181, 1)",
                  fontSize: "36px",
                  padding: "20px 0px 30px 30px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                ENQUIRE NOW
              </Typography>
            </Grid>

            <Grid item xs={9}>
              <input
                type="text"
                placeholder="     Name"
                style={{
                  backgroundColor: "rgba(182, 182, 182, 1)",
                  margin: "0px 0px 30px 40px",
                  width: "400px",
                  borderRadius: "10px",
                  height: "50px",
                  borderColor: "rgba(253, 253, 253, 1)",
                }}
              />
            </Grid>

            <Grid item xs={9}>
              <input
                type="text"
                placeholder="     Phone number"
                style={{
                  backgroundColor: "rgba(182, 182, 182, 1)",
                  margin: "0px 0px 30px 40px",
                  width: "400px",
                  borderRadius: "10px",
                  height: "50px",
                  borderColor: "rgba(253, 253, 253, 1)",
                }}
              />
            </Grid>

            <Grid item xs={9}>
              <input
                type="text"
                placeholder="     Email"
                style={{
                  backgroundColor: "rgba(182, 182, 182, 1)",
                  margin: "0px 0px 40px 40px",
                  width: "400px",
                  borderRadius: "10px",
                  height: "50px",
                  borderColor: "rgba(253, 253, 253, 1)",
                }}
              />
            </Grid>

            <Grid item xs={9}>
              <BootstrapButton
                variant="contained"
                disableRipple
                sx={{
                  margin: "0px 0px 40px 40px",
                  width: "410px",
                  borderRadius: "10px",
                  height: "50px",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "24px",
                }}
              >
                Submit
              </BootstrapButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{
          position: "absolute",
          display: "flex",
          marginTop: "51rem",
        }}
      >
        <Grid item xs={6}></Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              border: "1px solid rgba(255, 255, 255, 1)",
              justifyContent: "center",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              bgcolor: "rgba(0, 49, 82, 1)",
              height: "90%",
              alignItems: "center",
              marginTop: "45px",
            }}
          >
            <Grid item xs={1}>
              <PhoneIcon sx={{ color: "rgba(255, 255, 255, 1)" }} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "24px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                CALL NOW
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} sx={{ margin: "0px 0px 0px 20px" }}>
            <Grid
              item
              xs={9}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <ChatIcon
                sx={{
                  height: "30%",
                  width: "10%",
                  color: "rgba(255, 255, 255, 1)",
                  bgcolor: "rgba(0, 49, 82, 1)",
                  borderRadius: "5px",
                  margin: "3px 0px 8px 0px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={9}
              sx={{
                display: "flex",
                border: "1px solid rgba(0, 0, 0, 1)",
                justifyContent: "center",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                bgcolor: "rgba(249, 184, 0, 1)",
                height: "90%",
                alignItems: "center",
              }}
            >
              <Grid item xs={6}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: "24px",
                    textAlign: "left",
                  }}
                >
                  ENQUIRE NOW
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <AddIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
