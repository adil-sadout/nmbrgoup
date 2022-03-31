import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import {NavLink} from "react-router-dom";
import { ContainedButton } from '@iktakahiro/gradient-mui-button'

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  

  return (
      <>
        
        <IconButton size="large" edge="center" color="inherit" aria-label="logo" onClick={()=> setIsDrawerOpen(true)}>
          <MenuIcon/>
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={()=> setIsDrawerOpen(false)}
          
        >
          <Box sx={{width:"200px", fontSize:"24px",fontFamily:"Courier , sans-serif", fontWeight:"bold", display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column" , marginTop:"25px", mx:"20px"}}>
            <ContainedButton style={{margin:0}} color="primary">
                Connect
            </ContainedButton>

            <NavLink to="/Dashboard" style={{color:"black", paddingTop:"50px"}}>
              DASHBOARD
            </NavLink>
            
            <NavLink to="/Calculator" style={{color:"black", paddingTop:"50px"}}>
              CALCULATOR
            </NavLink>
            
            <NavLink to="/Swap" style={{color:"black", paddingTop:"50px"}}>
              SWAP
            </NavLink>
          </Box>
        </Drawer>
    </>
  );
}
