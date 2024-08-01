import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import Brightness5Icon from "@mui/icons-material/Brightness5";

export default function Amenities() {
  return (
    <Grid container item xs={12} sx={{ marginTop: "9rem" }}>
      <Grid
        item
        xs={12}
        sx={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/f6da/db2c/2430c83ef9495d51124a837f6aaa9825?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nC3staxk1vfPQBPu0rI2AFZO~z2mrwdagMzl1gQdxJiBw~OBA5qsSJBdXLR1lAwlRvwT7-veCE352bQn3im4t6685VOn459wXq95Nz2OOBIA748FlIjZpyWNQTs21rFyKttRkSy5kJQ6idF8diXKbfvZKyP31Uj~COntJi1h3B3FO3J4Wkcjlbb39caOhiVJ1NRnNb1YHK2EHLd2hKM~CytqG8uvdaF3NFcRhzrnwecx~Iep4Pkghy7GiYX5rAIUwGw1Wkvs7QEXmYJLkAFTHSZOG77bd05oiXRyAfYUSI0anLnYURUV8wElnceWXEGLr5QARsDcrg0khvwFdzOQRA__"
          alt="not found"
          style={{ width: "100%", opacity: 0.1, }}
        />
      </Grid>

      <Grid container item xs={12} sx={{ position: "relative" }}>
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

            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "20px",
                  color: "rgba(100, 74, 0, 1)",
                }}
              >
                Amenities
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
            Why you choose us
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", marginTop: "7rem", justifyContent: "center" }}
        >
          <Grid
            item
            xs={4}
            // sx={{ display: "flex", marginTop: "3rem", }}
          >
            <Grid item xs={12} sx={{ display: "flex", marginTop: "3rem" }}>
              <Grid item xs={3}>
                <LocationOnIcon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Located in Siruseri
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "19px",
                    }}
                  >
                    One of the Asia's Largest IT Park.Fastest growing
                    Residential & Commercial locality of Chennai that will set
                    you on a whole new lifestyle orbit.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", marginTop: "4rem" }}>
              <Grid item xs={3}>
                <BusinessIcon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Rooftop Amenities
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "19px",
                    }}
                  >
                    There is no limit to the happiness that awaits you at The
                    World of Joy.Mini theatre, Barbeque & Party Area, Viewing
                    Decks, Game Zone, Yoga Decks, Green Dining and More.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", marginTop: "5rem" }}>
              <Grid item xs={3}>
                <WavingHandIcon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Cosmo Clubhouse
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "19px",
                    }}
                  >
                    OMR's biggest Cosmo clubhouse unlimited ways to unwind.
                    Swimming pool, Clubhouse Lounge, Gym, Banquet Hall,
                    Co-working Spaces, Supermarket, Board Games Room and More.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", marginTop: "5rem" }}>
              <Grid item xs={3}>
                <ApartmentIcon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Tower to Tower Amenities
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "19px",
                    }}
                  >
                    A great place to work and also for parents to play with
                    there kids. Joy, play a game of badminton, work those brains
                    with a game of life size chess-It's all right here!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={3}   sx={{position: "relative",}}>
            <Grid item xs={3} sx={{ position: "absolute",margin:"0px 0px 0px 40px" }}>
              <img
                src="https://s3-alpha-sig.figma.com/img/deec/77ff/515c46614b54153c7e5ff8052796481e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SnB9jBC-910~b2~JglaopjY8Xxcgl~o4CqUtKVizsJDK0eMYX1fOp11ZsOyHQRael9f2g5ChzqAV4kjAcM1VW4r~sV~BQpgFM-Go0hzu~3I6EZ1PY5ieb5k9UC7DLz~2t897uRZ1uXbuQTWKXJl2Y6r1XPwaqt8i2atsRNEWgwBTw4548-0Q~mGbPxm5sRh9vxHyyfjwgZvzya7U8zzfU9ogMDj19~D4AhVaJE4HZDhN~xDMK2KKhG6pGD6ZknHkDm7j2P24yyxmAvxIIK-EdIr38uYnuZhb6qyg6JjAqGwbJIHbkX4fkritP3N2lozsQccvEtc3cCH9kbwLfyYXTw__"
                alt="not found"
              />
            </Grid>

            <Grid
              item
              xs={11}
              sx={{
                position: "relative",
                height: "23%",
                width: "90%",
                marginTop:"54rem"
              }}
            >
              <Box
                sx={{
                  height: "60%",
                  width: "90%",
                  bgcolor: " rgba(255, 255, 255, 1)", 
            border: "1px solid rgba(255, 255, 255, 0.9)", 
               borderTopLeftRadius:"400px",
               borderTopRightRadius:"400px",
               borderBottomLeftRadius:"50px",
              borderBottomRightRadius:"50px",
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6)"            }}
              ></Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={4}
          >
            <Grid item xs={12} sx={{ display: "flex", marginTop: "5rem" }}>
              <Grid item xs={3}>
                <WbIncandescentIcon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Urbanrise Genius
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "17px",
                    }}
                  >
                    A well designed Children's learning hub-Urbanrise Genius
                    ensures within the community will ensure the Children won't
                    have to go anywhere else for the tuition classes.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", marginTop: "4rem" }}>
              <Grid item xs={3}>
                <NaturePeopleIcon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    1 Acre Green Park
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "17px",
                    }}
                  >
                    Find happiness in the great outdoor-Mini Soccer Field,
                    Basketball Court, Outdoor Gym, Cricket Practice Nets,
                    Amphitheatre, Table Tennis, Gazebo, Hammock Park and More.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", marginTop: "4rem" }}>
              <Grid item xs={3}>
                <Brightness5Icon
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Mivan Technology
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "17px",
                    }}
                  >
                    Strong homes built using Mivan Technology - High Strength &
                    Superior Quality, Speedy construction, More soundproof for
                    privacy, No cracks & less repair works and more.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", marginTop: "4rem" }}>
              <Grid item xs={3}>
                <Box
                  sx={{
                    border: "1px solid rgba(249, 184, 0, 1)",
                    bgcolor: "rgba(249, 184, 0, 1)",
                    height: "50%",
                    width: "50%",
                    padding: "10px 4px ",
                    borderTopLeftRadius: "23px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "23px",
                    borderBottomLeftRadius: "8px",
                    color: "rgba(0, 0, 0, 1)",
                    marginLeft: "20px",
                  }}
                ></Box>
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 1)",
                      padding: "5px 0px 12px 0px",
                      textAlign: "left",
                    }}
                  >
                    Location Advantage
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(33, 33, 33, 1)",
                      textAlign: "left",
                      lineHeight: "17px",
                    }}
                  >
                    Close Proximity to everything you'll ever need -
                    restaurants, schools, colleges, hospitals, malls and more.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
