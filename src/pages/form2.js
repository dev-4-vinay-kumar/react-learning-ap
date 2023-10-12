import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function Form() {
  const navigate=useNavigate()
    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{padding:'20px',marginTop:'50px',backgroundColor:"ButtonHighlight"}}>
      <Typography variant="h3">PAGE 2</Typography>
      <Grid container columnSpacing={4} rowSpacing={6} style={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
          <TextField fullWidth id="outlined-basic" label="Customer Name" variant="outlined"/>
          </Grid>
          <Grid item xs={12} md={6} >
          <TextField fullWidth id="outlined-basic" label="E-Mail" variant="outlined"/>
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField fullWidth id="outlined-basic" label="Bussiness Name" variant="outlined"/>
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined"/>
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField fullWidth id="outlined-basic" label="City" variant="outlined"/>
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField fullWidth id="outlined-basic" label="Schedule" variant="outlined"/>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={()=>{navigate('/form3')}} variant="contained" color='success' size='large'>SUBMIT</Button>
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
    );
}