import React from 'react'
import {NavLink} from "react-router-dom"
import { ContainedButton } from '@iktakahiro/gradient-mui-button'
import Container from '@mui/material/Container'
import Box from '@material-ui/core/Box';


function LandingNavbar() {
  return (
    <Container sx={{fontSize:"24px", fontStyle:"",margin:0, padding:0, minHeight:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        
        <Box  p={1}>
            <NavLink to="/Dashboard">
            <ContainedButton style={{margin:0}} color="primary">
                Dashboard
            </ContainedButton>
            </NavLink>
            

        </Box>
    </Container>
    
  )
}

export default LandingNavbar