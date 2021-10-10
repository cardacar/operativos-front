import React,{Fragment} from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import coffeFondo from "../assets/coffeFondo.jpg";

const Home = () => {
  return (
    <Fragment>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${coffeFondo})`,
          height: "92vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.5)",
          }}
          />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
              >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                >
                Cafe
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                La tienda donde encontraras el mejor cafe de todo Colombia,
                te invitamos que compres y disfrutes mientras lo haces
              </Typography>
              
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Home;
