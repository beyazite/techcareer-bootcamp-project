import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../common/color";
import {
  Container,
  Stack,
  Chip,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

import FormMessage from "./FormMessage";
import WhyTitle from "./Why";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: theme.palette.dark.main,
        padding: "2rem",
        paddingTop:'10rem',
        color: "#fff"
      }}
    >
      <ThemeProvider theme={theme}>
        <Container>
          <div
            style={{
              backgroundColor: theme.palette.dark.main,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h2 style={{ color: "#fff" }}>TITLE</h2>
            <Stack direction="row" spacing={1}>
              <Chip
                label={<FacebookOutlinedIcon />}
                color="primary"
                sx={{
                  "&:hover": { backgroundColor: "#0d47a1", color: "white" },
                }}
              />
              <Chip
                color="primary"
                label={<TwitterIcon />}
                sx={{
                  "&:hover": { backgroundColor: "#0d47a1", color: "white" },
                }}
              />
              <Chip
                label={<PinterestIcon />}
                color="primary"
                sx={{
                  "&:hover": { backgroundColor: "#0d47a1", color: "white" },
                }}
              />
              <Chip
                label={<InstagramIcon />}
                color="primary"
                sx={{
                  "&:hover": { backgroundColor: "#0d47a1", color: "white" },
                }}
              />
              <Chip
                label={<GoogleIcon />}
                color="primary"
                sx={{
                  "&:hover": { backgroundColor: "#0d47a1", color: "white" },
                }}
              />
            </Stack>
          </div>
          <Divider sx={{ mb: 2 }}></Divider>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h4>WHY TITLE ?</h4>
              <WhyTitle></WhyTitle>
            </Grid>
            <Grid item xs={4}>
              <div>
                <h4 style={{ marginBottom: "1rem" }}>CONTACT</h4>
                <div>
                  <TextField
                    label="Phone Number"
                    value="5555555555"
                    disabled
                    variant="standard"
                    sx={{ display: "block", mb: 3 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                  <TextField
                    label="Email"
                    value="ornek@ornek.com"
                    disabled
                    variant="standard"
                    sx={{ display: "block", mb: 3 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                  <TextField
                    label="Location"
                    value="Istanbul,Turkey"
                    disabled
                    variant="standard"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <h4>LEAVE A MESSAGE</h4>
                <FormMessage></FormMessage>
              </div>
            </Grid>
          </Grid>
          <Divider sx={{ mb: 2, mt: 2 }}></Divider>
          <p style={{ textAlign: "center", color: "#fff" }}>
            Copyright © 2023.All Rights Reserved By TITLE.
          </p>
        </Container>
      </ThemeProvider>
    </footer>
  );
};

export default Footer;
