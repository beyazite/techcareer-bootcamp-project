import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid , Container,Link, Tooltip, Typography, Button, CardMedia, CardActions, Card } from '@mui/material';
 
function TopEvents() {
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Fetching error: ', error);
        });
    }, []);
  
  
    return (
      <>
      <Container sx={{mb: 8, mt: 3}}>
      <fieldset className="top-event-fieldset"><legend><Typography variant="h6">Music</Typography></legend>
      <Button sx={{float: "right", mt: -2}} variant="outlined" size="small">View More</Button>
          <Grid container spacing={2}>
    
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card sx={{maxWidth: 250, maxHeight: 200}}>
                <Link href="#">
                  <CardMedia
                     sx={{ height: 140 }}
                     image={item.thumbnailUrl}
                     title={item.title}
                  />
                </Link>
        
             <CardActions>
              <Tooltip title={item.title}>
               <Button className="detail-button" size="small" href="#" sx={{textOverflow: "ellipsis"}}>{item.title}
               </Button>
               </Tooltip>
             </CardActions>
            </Card>
          </Grid>
          ))}
  
        </Grid>
      </fieldset>
        </Container>
  
  
  
        <Container>
      <fieldset className="top-event-fieldset"><legend><Typography variant="h6">Events - Art</Typography></legend>
      <Button sx={{float: "right", mt: -2}} variant="outlined" size="small">View More</Button>
          <Grid container spacing={2}>
    
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card sx={{maxWidth: 250, maxHeight: 200}}>
                <Link href="#">
                  <CardMedia
                     sx={{ height: 140 }}
                     image={item.thumbnailUrl}
                     title={item.title}
                  />
                </Link>
        
             <CardActions>
               <Button size="small" href="#">{item.title}</Button>
             </CardActions>
            </Card>
          </Grid>
          ))}
  
        </Grid>
      </fieldset>
        </Container>
  
  
  
        <Container>
      <fieldset className="top-event-fieldset"><legend><Typography variant="h6">Sports</Typography></legend>
      <Button sx={{float: "right", mt: -2}} variant="outlined" size="small">View More</Button>
          <Grid container spacing={2}>
    
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card sx={{maxWidth: 250, maxHeight: 200}}>
                <Link href="#">
                  <CardMedia
                     sx={{ height: 140 }}
                     image={item.thumbnailUrl}
                     title={item.title}
                  />
                </Link>
        
             <CardActions>
               <Button size="small" href="#">{item.title}</Button>
             </CardActions>
            </Card>
          </Grid>
          ))}
  
        </Grid>
      </fieldset>
        </Container>
      </>
    );
  }
  
  export default TopEvents;