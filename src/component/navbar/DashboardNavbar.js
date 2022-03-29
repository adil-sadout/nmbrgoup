import React from 'react'
import {NavLink} from "react-router-dom"
import { ContainedButton } from '@iktakahiro/gradient-mui-button'
import Container from '@mui/material/Container'
import Box from '@material-ui/core/Box';

function DashboardNavbar() {

    
    


  return (
    <Container sx={{fontSize:"24px", fontStyle:"",margin:0, padding:0, minHeight:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box sx={{underline:"none"}} p={1}>
            <NavLink className="" to="/">    
                <img width="80px" src="assets/globe-lineal.png" alt="" />
            </NavLink>
        </Box>
    
        <Box sx={{fontSize:"24px",margin:0, padding:0, minHeight:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Box p={1}>
                <NavLink 
                style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid #4BB3FD' :"white",
                    paddingBottom:isActive? "5px":"0"
                  })}
                to="/Dashboard">Dashboard</NavLink>
            </Box>
            <Box  p={1}>
                <NavLink
                style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid #4BB3FD' :"white",
                    paddingBottom:isActive? "5px":"0"
                  })}
                to="/Calculator">Calculator</NavLink>
            </Box>
            <Box  p={1}>
                <NavLink 
                style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid #4BB3FD' :"white",
                    paddingBottom:isActive? "5px":"0"
                  })}
                to="/Swap">Swap</NavLink>
            </Box>
        </Box>
        
        
        <Box  p={1}>
            <ContainedButton style={{margin:0}} color="default">Connect</ContainedButton>
        </Box>
    </Container>
  )
}

export default DashboardNavbar