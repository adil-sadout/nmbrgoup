import React from 'react'
import {NavLink} from "react-router-dom"
import Container from '@mui/material/Container'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function LandingNavbar() {
  return (
    <Container sx={{fontSize:"24px",margin:0, padding:0, minHeight:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        
        <Box  p={1}>
            <NavLink to="/Dashboard">
              <Button style={{background: 'linear-gradient(to bottom, #E5F0FF, #2F80E8)', fontFamily:"poppins", fontWeight:"bold", letterSpacing:"2px"}}  variant="text">Access Dashboard</Button>
            </NavLink>
        </Box>
    </Container>
    
  )
}

export default LandingNavbar