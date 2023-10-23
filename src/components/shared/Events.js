import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const imageUrls = [
  "resim_url_1.jpg",
  "resim_url_2.jpg",
  "resim_url_3.jpg",
  "resim_url_4.jpg",
  "resim_url_5.jpg",
  "resim_url_6.jpg",
  "resim_url_7.jpg",
  "resim_url_8.jpg",
  "resim_url_9.jpg",
  "resim_url_10.jpg",
  "resim_url_11.jpg",
  "resim_url_12.jpg",
  "resim_url_13.jpg",
  "resim_url_14.jpg",
  "resim_url_15.jpg",
  "resim_url_16.jpg",
  "resim_url_17.jpg",
  "resim_url_18.jpg",
  "resim_url_19.jpg",
  "resim_url_20.jpg",
];
function Filter() {
  return (
    <Card sx={{ minWidth: 100, width: 165, height: 190, marginTop: 2.5 }}>
      <CardContent></CardContent>
    </Card>
  );
}

export default function BasicGrid() {
  return (
    <>
      <Box display="flex" justifyContent="flex-start" marginLeft="200px">
        <Typography variant="h5" align="center">
          Events
        </Typography>
      </Box>
      <Container
        style={{
          background: "white",
          paddingTop: "16px",
          paddingBottom: "16px",
          marginRight: "175px",
          marginTop: "20px",
          width: "76.5%",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid ml={4} xs={3}>
              <Filter></Filter>
              <Filter></Filter>
              <Filter></Filter>
            </Grid>
            <Grid xs={8}>
              <Box mt={2} mb={2}>
                <Grid container spacing={2}>
                  {imageUrls.map((imageUrl, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                      <Card
                        style={{
                          height: "100%",
                          width: "100%",
                          border: "2px solid lightgray",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt={`Image ${index + 1}`}
                          image={imageUrl}
                          title={`Image ${index + 1}`}
                        />
                        <CardContent>
                          <Typography variant="subtitle1">
                            Image {index + 1}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box display="flex" marginTop="40px" justifyContent="center">
                <ChevronLeftIcon></ChevronLeftIcon>
                <Typography variant="h7" align="center">
                  Page
                </Typography>
                <ChevronRightIcon></ChevronRightIcon>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
