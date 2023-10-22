import React from "react";
import { Container, AppBar, Toolbar, Button, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../common/color";

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.dark.main }}
      >
        <Toolbar>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1>NavBar</h1>

              <ul>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m:2
                  }}
                >
                  <li>
                    <Button color="inherit" href="#">
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button color="inherit" href="#">
                      Music
                    </Button>
                  </li>
                  <li>
                    <Button color="inherit" href="#">
                      Events
                    </Button>
                  </li>
                  <li>
                    <Button color="inherit" href="#">
                      Sports
                    </Button>
                  </li>
                  <li>
                    <Button color="inherit" href="#">
                      Contact
                    </Button>
                  </li>
                </Box>
              </ul>
              <Button
                variant="contained"
                sx={{
                  m: 3,
                }}
              >
                Login
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
