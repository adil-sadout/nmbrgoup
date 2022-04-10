import DashboardNavbar from './DashboardNavbar'
import LandingNavbar from './LandingNavbar'
import HamburgerNavbar from "./HamburgerNavbar"
import { useLocation } from 'react-router-dom'
import {NavLink} from "react-router-dom";

import { useContext, useState , useEffect} from 'react';
import { Web3Context } from '../../context/AppContext';
import Web3 from "web3";

function Navbar() {

    

    const {web3, setWeb3} = useContext(Web3Context)

    

    const connectWalletHandler = async()=>{
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try{
                await window.ethereum.request({method:"eth_requestAccounts"})
                setWeb3((new Web3(window.ethereum)))
            }catch(err){
                console.log(err.message)
            }
        }else{
            console.log("please install Metamask!")
        }
    }

    const disconnectWalletHandler = async()=>{
        setWeb3(undefined);
    }

    
    
    const location = useLocation();



    useEffect(()=>{
        
            
        console.log(web3?.currentProvider?.selectedAddress)
        
        
    },[web3])
    

    return (
        <div className='container-md d-flex justify-content-between align-items-center' style={{letterSpacing:"2px", minHeight:"80px"}}>
            <div className='d-flex justify-content-center align-items-center p-1' >
                <NavLink className="" to="/">    
                    <img width="70px" src="assets/brainlogo.webp" alt="" />
                </NavLink>
            </div>
            <div className='d-inline-block p-1'>
            {
                (location.pathname==="/")?
                <LandingNavbar/>:
                <>
                    
                    <DashboardNavbar connectWalletHandler={connectWalletHandler} disconnectWalletHandler={disconnectWalletHandler} web3={web3} />
                    <HamburgerNavbar connectWalletHandler={connectWalletHandler} disconnectWalletHandler={disconnectWalletHandler} web3={web3} />
                
                </>
            }
            </div>
            
        </div>
    )
}

export default Navbar