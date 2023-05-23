import React from 'react'
import HeaderPage from '../Header/HeaderPage'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Slider from '../Pages/SliderPage'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Index() {
  return (
    <div style={{ backgroundImage: `url(${'bgimg1.jpg'})`,
   height: '843px'}}>
      <div className='div-nav'>
          <HeaderPage/>
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={7}>
          <div className='div-itme-search'>
          
           <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder=""
                    inputProps={{ 'aria-label': 'search google maps' }}
                    className='input-seach'
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
                </Paper>
           
          </div>
        </Grid>
        {/* <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid> */}
      </Grid>
      
    </Box>
   <br/>

 
     <Box sx={{ flexGrow: 1 }}>
       <div className='div-slider'>
        <Grid container spacing={2}>
          
            <Grid item xs={12} md={12}>
               
                    <div className='div-slider-border'>
                         <Slider/>
                    </div>
                
            </Grid>
            
          </Grid>
        </div> 
        </Box>
   
    </div>
  )
}
