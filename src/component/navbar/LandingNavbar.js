import React from 'react'
import {NavLink} from "react-router-dom"
import { ContainedButton } from '@iktakahiro/gradient-mui-button'
import Container from '@mui/material/Container'
import Box from '@material-ui/core/Box';

function LandingNavbar() {
  return (
    <Container sx={{fontSize:"24px", fontStyle:"",margin:0, padding:0, minHeight:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box sx={{underline:"none"}} p={1}>
            <NavLink className="" to="/">    
                <img width="80px" src="assets/globe-lineal.png" alt="" />
            </NavLink>
        </Box>
        <Box  p={1}>
            <ContainedButton style={{margin:0}} color="primary">
                <NavLink to="/Dashboard">Dashboard</NavLink>
            </ContainedButton>
        </Box>
    </Container>
    
  )
}

export default LandingNavbar