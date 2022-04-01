import React from 'react'
import {NavLink} from "react-router-dom"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Box from '@material-ui/core/Box';


function DashboardNavbar() {

    
    


  return (
    <Container sx={{fontSize:"20px", textAlign:"center",margin:0, padding:0, minHeight:"100px", display:"flex", alignItems:"center", width:"90vh", justifyContent:"end"}}>
        
    
        <Box sx={{width:"500px", display:"flex",justifyContent:"space-around", alignItems:"center"}}>

            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #02AAB0' :"white",
                        paddingBottom:isActive ? "5px":"0",
                        padding:"inherit 10px"
                      })}
                    to="/Dashboard">Dashboard</NavLink>
            
            
            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #02AAB0' :"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Calculator">Calculator</NavLink>
            

            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #02AAB0' :"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Swap">Swap</NavLink>

                    <NavLink to="#">
                        <Button style={{background: 'linear-gradient(to right, #02aab0, #00cdac)', fontFamily:"poppins", fontWeight:"bold", color:"white", padding:"6px 10px", fontSize:"16px", letterSpacing:"2px"}}  variant="text">Connect</Button>
                    </NavLink>
            

            

        </Box>
        
        
        
        
    </Container>
  )
}

export default DashboardNavbar