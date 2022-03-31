import React from 'react'
import {NavLink} from "react-router-dom"
import { ContainedButton } from '@iktakahiro/gradient-mui-button'
import Container from '@mui/material/Container'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function DashboardNavbar() {

    
    


  return (
    <Container sx={{fontSize:"24px", textAlign:"center",fontStyle:"",margin:0, padding:0, minHeight:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        
    
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
                <Box px={5}>
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '1px solid #4BB3FD' :"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Dashboard">DASHBOARD</NavLink>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box px={5}>
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '1px solid #4BB3FD' :"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Calculator">CALCULATOR</NavLink>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box px={5}>
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '1px solid #4BB3FD' :"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Swap">SWAP</NavLink>
                </Box>
            </Grid>
        </Grid>
        
        
        <Box p={1}>
            <ContainedButton style={{margin:0}} color="default">Connect</ContainedButton>
        </Box>
    </Container>
  )
}

export default DashboardNavbar