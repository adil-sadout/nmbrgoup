import DashboardNavbar from './DashboardNavbar'
import LandingNavbar from './LandingNavbar'
import HamburgerNavbar from "./HamburgerNavbar"
import { useLocation } from 'react-router-dom'
import {NavLink} from "react-router-dom";


function Navbar() {

    
    
    const location = useLocation();
    

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
                    
                    <DashboardNavbar/>
                    <HamburgerNavbar/>
                
                </>
            }
            </div>
            
        </div>
    )
}

export default Navbar