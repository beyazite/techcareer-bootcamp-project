import React from 'react'
import TicketAccordion from './event-detail-components/TicketAccordion'
import CalendarAccordion from './event-detail-components/CalendarAccordion'
import { Grid, Paper } from '@mui/material'
import VisualSlide from '../../components/shared/VisualSlide'



function EventDetail() {
  return (
   

    <Grid container spacing={2}>
      <Grid item xs={9} md={6}>
        <Paper>Event Name</Paper>
      </Grid>
      <Grid item xs={3} md={6}>
      <Paper sx={{float: "right"}}>
      Share On Social Media

      </Paper>
      </Grid>
      <Grid item xs={12}>
        {/* İlgili konserin görselleriyle gösterim yapılacak */}
       <VisualSlide/>
      </Grid>
      <Grid container spacing={2} item xs={12} md={6}>
        <Grid item xs={12}>
          <Paper>Event Detail
            

          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper>Map</Paper>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3872089985102!2d28.909373075593518!3d41.06052801620662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab088cd043bf5%3A0xcf4b63fe45d3c8ef!2s%C5%9Eanzelize%20Kafe!5e0!3m2!1str!2str!4v1698061902676!5m2!1str!2str" width="100%" height="95%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>Calendar and Ticket</Paper>
             <CalendarAccordion xs={{}}/>
             
             <TicketAccordion/>
        
       
      </Grid>
    </Grid>
  )
}

export default EventDetail