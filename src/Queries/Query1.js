import React from "react";
import Drawer from "../Drawer";
import AppBar from "../AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chart from "./Charts";

const mdTheme = createTheme();
export default class Query1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      age: "",
    };
  }

  toggleDrawer = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ age: event.target.value });
  };

  render() {
    let { open, age } = this.state;
    return (
      <div className="About">
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar open={open} toggleDrawer={this.toggleDrawer} />
            <Drawer open={open} toggleDrawer={this.toggleDrawer} />
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

              <div style={{ margin: "35px", padding: "20px" }}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                  fontWeight="bold"
                >
                  Filters
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl
                    sx={{
                      m: 3,
                      minWidth: 120,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={(e) => this.handleChange(e)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{
                      m: 3,
                      minWidth: 120,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      //   onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{
                      m: 3,
                      minWidth: 120,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      //   onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <Grid item xs={12} style={{ margin: "40px" }}>
                <Paper
                  sx={{
                    p: 2,
                    m: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}
