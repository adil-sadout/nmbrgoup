import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

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
          <Box sx={{width:"200px", fontSize:"24px", fontWeight:"bold", display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column" , marginTop:"50px", mx:"20px"}}>

          <Button className="btnStyle" style={{fontSize:"24px", padding:"5px 20px"}} variant="text">Connect</Button>

            <NavLink to="/Dashboard" style={{color:"black", marginTop:"50px", padding:"5px"}}>
              DASHBOARD
            </NavLink>
            
            <NavLink to="/Calculator" style={{color:"black", marginTop:"50px", padding:"5px"}}>
              CALCULATOR
            </NavLink>
            
            <NavLink to="/Swap" style={{color:"black", marginTop:"50px", padding:"5px"}}>
              SWAP
            </NavLink>
          </Box>
        </Drawer>
    </>
  );
}
