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
                        borderBottom: isActive ? '2px solid #BFDBF7' :"white",
                        paddingBottom: isActive ? "5px":"0",
                        color: isActive ? "#BFDBF7":"white",
                        padding:"inherit 10px"
                      })}
                    to="/Dashboard">Dashboard</NavLink>
            
            
            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #BFDBF7' :"white",
                        color: isActive ? "#BFDBF7":"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Calculator">Calculator</NavLink>
            

            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #BFDBF7' :"white",
                        paddingBottom:isActive? "5px":"0",
                        color: isActive ? "#BFDBF7":"white",
                      })}
                    to="/Swap">Swap</NavLink>

                    <NavLink to="#">
                        <Button className='btnStyle' style={{padding:"6px 10px", fontSize:"16px"}}  variant="text">Connect</Button>
                    </NavLink>
            

            

        </Box>
        
        
        
        
    </Container>
  )
}

export default DashboardNavbar