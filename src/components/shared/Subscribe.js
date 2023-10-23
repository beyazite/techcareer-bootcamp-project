import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  ThemeProvider,
  TextField,
  Grid,
} from "@mui/material";
import theme from "../common/color";

const Subscribe = () => {
  return (
    <>
      <div style={{ height: "110px", opacity: "0.9" }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="md">
            <Card
              sx={{
                minWidth: 275,
                marginTop: "5rem",
                textAlign: "center",
                backgroundColor: theme.palette.light.main,
                display: "flex",
                justifyContent: "center",
              }}
              elevation={12}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  SUBSCRIBE NOW
                </Typography>
                <Typography variant="h5" component="div">
                  TO GET LATEST UPDATE
                </Typography>
                <form>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <TextField
                          label="Email Adress"
                          fullWidth
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mt: 2 }}
                        >
                          Subscribe
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </form>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  We send you latest update and news to your email
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Subscribe;
