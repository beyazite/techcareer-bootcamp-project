import React from "react";
import {
  Grid,
  Button,
  TextField,
  TextareaAutosize,
  Paper,ThemeProvider
} from "@mui/material";
import theme from "../common/color";


const FormMessage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Paper sx={{p:2}} style ={{backgroundColor : theme.palette.light.main}}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextField fullWidth label="Name" name="firstName" variant="standard"/>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField fullWidth label="Surname" name="lastName" variant="standard"/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone Number" name="phoneNumber" variant="standard"/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" name="email" variant="standard"/>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={5}
              placeholder="Write your message..."
              name="message"
              style={{ backgroundColor:theme.palette.light.main}}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
             Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </ThemeProvider>
  );
};

export default FormMessage;
