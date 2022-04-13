import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@material-ui/core/IconButton";
import {NavLink} from "react-router-dom";

export default function HamburgerNavbar({ connectWalletHandler, disconnectWalletHandler, web3, walletAddy }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  

  return (
      <div className="d-inline-block d-md-none">
        
        <IconButton size="large" edge="center" color="inherit" aria-label="logo" onClick={()=> setIsDrawerOpen(true)}>
          <MenuIcon/>
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={()=> setIsDrawerOpen(false)}
          
        >
          <div className="fs-4 fw-bold d-flex flex-column justify-content-center align-items-center mt-5" style={{width:"250px"}}>

            <>
                {
                      
                      (web3?.currentProvider?.selectedAddress === undefined)?
                      <button onClick={connectWalletHandler} className="btnStyle fs-5 px-3 py-2" >Connect</button>:
                      <button className="btnStyle fs-5 px-3 py-2" >{walletAddy}</button>
                }
            </>

            

            <NavLink to="/Dashboard" className="mt-5 p-1 text-dark">
              DASHBOARD
            </NavLink>
            
            <NavLink to="/Calculator" className="mt-5 p-1 text-dark">
              CALCULATOR
            </NavLink>
            
            <NavLink to="/Swap" className="mt-5 p-1 text-dark">
              SWAP
            </NavLink>
          </div>
        </Drawer>
    </div>
  );
}
