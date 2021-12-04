import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import AppBar from "./AppBar";

const mdTheme = createTheme();

export default function Query() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function routeChange(query) {
    navigate("query" + query);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer} />
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} onClick={() => routeChange(1)}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 200,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Query 1
                  </Typography>
                  <p>
                    Age Span of victims of a particular crime and certain
                    ethnicity, selected by the user, displayed in a stacked area
                    chart over a chosen time period.
                  </p>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} onClick={() => routeChange(2)}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 200,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Query 2
                  </Typography>
                  <p>
                    Total number of crimes committed in a user selected area
                    within a time period of specified years broken down by
                    number of crimes per month.
                  </p>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} onClick={() => routeChange(3)}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 200,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Query 3
                  </Typography>
                  <p>
                    Temporal trend analysis of geographical crime density in a
                    particular area.
                  </p>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} onClick={() => routeChange(4)}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 200,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Query 4
                  </Typography>
                  <p>
                    Frequency of all weapons used in crimes against women within
                    a certain time period.
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
