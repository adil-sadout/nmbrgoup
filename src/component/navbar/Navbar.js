import DashboardNavbar from './DashboardNavbar'
import LandingNavbar from './LandingNavbar'
import HamburgerNavbar from "./HamburgerNavbar"
import Container from "@mui/material/Container"
import { useLocation } from 'react-router-dom'
import Box from "@material-ui/core/Box";
import {NavLink} from "react-router-dom";
import { useTheme } from '@mui/system'
import { useMediaQuery } from '@mui/material'

function Navbar() {

    const theme = useTheme();

  // isMobile will be true on screen sizes small or extra small
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    

    
    const location = useLocation();
    

    return (
        <Container maxWidth="lg" sx={{letterSpacing:"2px", minHeight:"100px", width:"100vw",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Box sx={{underline:"none", display:"flex", justifyContent:"center", alignItems:"center"}} p={1}>
                <NavLink className="" to="/">    
                    <img width="100px" src="assets/logomkr4.png" alt="" />
                </NavLink>
            </Box>
            <Box sx={{underline:"none", display:"inline-block"}} p={1}>
            {
                (location.pathname==="/")?
                <LandingNavbar/>:
                <>{
                    isMobile===false?
                    <DashboardNavbar/>:
                    <HamburgerNavbar/>
                }
                </>
            }
            </Box>
            
        </Container>
    )
}

export default Navbar