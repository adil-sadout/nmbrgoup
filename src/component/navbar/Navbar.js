import DashboardNavbar from './DashboardNavbar'
import LandingNavbar from './LandingNavbar'
import HamburgerNavbar from "./HamburgerNavbar"
import { useLocation } from 'react-router-dom'
import {NavLink} from "react-router-dom";
import { useContext , useEffect} from 'react';
import { valuesContext } from '../../context/AppContext';
import Web3 from "web3";
import truncateEthAddress from 'truncate-eth-address';
function Navbar() {

    

    const {web3, setWeb3, walletAddy, setWalletAddy} = useContext(valuesContext)

    

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
        if(web3?.currentProvider?.selectedAddress !==undefined){
            setWalletAddy(truncateEthAddress(web3.currentProvider.selectedAddress))
        }
        

    },[web3])

    
    

    return (
        <div className='container-md d-flex justify-content-between align-items-center' style={{letterSpacing:"2px", minHeight:"80px"}}>
            <div className='d-flex justify-content-center align-items-center p-1' >
                <NavLink className="" to="/">    
                    <img width="90px" src="assets/apeimage2.png" alt="" />
                </NavLink>
            </div>
            <div className='d-inline-block p-1'>
            {
                (location.pathname==="/")?
                <LandingNavbar/>:
                <>
                    
                    <DashboardNavbar connectWalletHandler={connectWalletHandler} disconnectWalletHandler={disconnectWalletHandler} web3={web3} walletAddy={walletAddy} />
                    <HamburgerNavbar connectWalletHandler={connectWalletHandler} disconnectWalletHandler={disconnectWalletHandler} web3={web3} walletAddy={walletAddy} />
                
                </>
            }
            </div>
            
        </div>
    )
}

export default Navbar