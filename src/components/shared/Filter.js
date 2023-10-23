import React from "react";
import { Container, ThemeProvider, Paper, Grid, Typography } from "@mui/material";
import theme from "../common/color";
import Date from "./Date";
import SearchBar from "./SearchBar";
import FormSelect from "./FormSelect";

const Filter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{}}>
        <Paper
          sx={{
            backgroundColor: theme.palette.dark.main,
            marginTop: "1rem",
            padding: "2rem",
          }}
          elevation={6}
        >
           <Typography variant="h6" sx={{
            color: '#fff',
            marginBottom: "1rem",
          }}>FIND YOUR ACTIVITY</Typography>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <SearchBar></SearchBar>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={4}> <FormSelect></FormSelect></Grid>
                    <Grid item xs={4}> <FormSelect></FormSelect></Grid>
                    <Grid item xs={4}><Date></Date></Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;
