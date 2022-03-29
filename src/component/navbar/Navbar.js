import DashboardNavbar from './DashboardNavbar'
import LandingNavbar from './LandingNavbar'
import Container from "@mui/material/Container"
import { useLocation } from 'react-router-dom'

function Navbar() {

    
    const location = useLocation();
    console.log(location.pathname);

    return (
        <Container maxWidth="lg">
            {
                (location.pathname==="/")?
                <LandingNavbar/>:
                <DashboardNavbar/>
            }
            
        </Container>
    )
}

export default Navbar