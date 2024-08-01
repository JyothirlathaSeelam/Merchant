import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';


export default function Projecthighlights() {
  return (
    <Grid container item xs={12}   sx={{margin:"40px 0px 0px 0px",overflowY:"auto"}}>
      <Grid item xs={6}   sx={{margin:"40px 0px 50px 30px",height:"10%",width:"70%"}}>
        <img
          src="https://s3-alpha-sig.figma.com/img/f2be/7ea7/f7f0e25e3604eab7158cf1f9ae4991a5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JM8wuwHIWR3rtVZX-ttTx-wovOYkMsMP70rr4XTzsgf6oh3PVgrSw0YzikIiNJzWzlsWzpMqeL-Ln81j3P2DnpFUdQmuOF7vpAhk9xX7YrcqQX~ezBUzjlryIB5V62VVqxJ1hIDWaiZqOjJvDutsQtPSYKywuC5UPR-Ucp3G8FyvWGLlOtW-rawRMl9OKpe0cq8ITFl5SYF7SR41q-Qix6DPBDg95xwEUybwL-HoYPkOHpugjgy2US9ERf2hVFbjtqFscDfNSEbTWlOKm6uWSOZJJBpKZhwwITEfJQGsqzakgBwtMa~KZJ6CtWGtl5GdOEpuoFVvER1lEh7dWsEvzg__"
          alt="not found"
          style={{width:"50%",height:"100%"}}
        />
      </Grid>

      <Grid item xs={6}>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              border: "1px solid rgba(249, 184, 0, 1)",
              height: "1px",
            }}
          ></Grid>
          <Grid item xs={5}>
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
<Box   >
zsdxcfgvbhj
</Box>

          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
