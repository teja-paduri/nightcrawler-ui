import React from "react";
import Drawer from "./Drawer";
import AppBar from "./AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const mdTheme = createTheme();

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  toggleDrawer = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  render() {
    return (
      <div className="About">
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar open={this.state.open} toggleDrawer={this.toggleDrawer} />
            <Drawer open={this.state.open} toggleDrawer={this.toggleDrawer} />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "#333333",
                        // height: 240,
                      }}
                    >
                      <React.Fragment>
                        <Typography
                          component="h2"
                          variant="h6"
                          color="#99CC66"
                          fontWeight="bold"
                          gutterBottom
                        >
                          What is NightCrawler ?
                        </Typography>
                        <p style={{ color: "white" }}>
                          NightCrawler is a dynamic web application that
                          provides critical information regarding crimes against
                          women in Los Angeles between the period 2010 - 2019.
                          Our application’s intent is to help every user wanting
                          to know about the crime rate against women and its
                          trend over years in L.A. In achieving this, we cover
                          major trend analysis which offers to plot data
                          filtered by the user, the visualization of data i.e.,
                          communicating the data with respect to time series in
                          an efficient way. It also filters upon different crime
                          categories, time periods, etc., and views the data
                          accordingly.
                        </p>
                      </React.Fragment>
                      <React.Fragment>
                        <Typography
                          component="h2"
                          variant="h6"
                          color="#99CC66"
                          fontWeight="bold"
                          gutterBottom
                        >
                          Why NightCrawler ?
                        </Typography>
                        <p style={{ color: "white" }}>
                          With the great development in technology, we’d like to
                          make our web application totally tech-driven using
                          enormous data. We can extend this application to
                          different cities in the future too. Hence, database
                          support is very crucial in order to scale our
                          application. Every person might want to know about the
                          crime statistics in their real-life to do a safety
                          check but never knowing where the right place is? We
                          aimed NightCrawler totally for it and hope it reaches
                          everyone out there.
                        </p>
                      </React.Fragment>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}
