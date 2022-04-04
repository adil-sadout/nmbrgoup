import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import BarChart from "../component/charts/BarChart"
function Dashboard() {
  return (
    <>
      < >
        <Grid container spacing={1} className="grid row" sx={{backgroundColor:"#202337", borderRadius:"1rem", padding:"10px", margin:"auto"}}>
          
          <Box className="col-12 col-md-2"  sx={{textAlign:"center", backgroundColor:"#0F1228", borderTopRightRadius:"10px", borderBottomRightRadius:"10px", padding:"1rem"}}>
            <p>PORTFOLIO</p>
            <p>0x3096...A246</p>
          </Box>

          <Box className="col-12 col-md-8 py-1 p-sm-3" sx={{fontWeight:"bold", letterSpacing:"1.5px"}}>
            <p>Chart</p>
            <BarChart/>
          </Box>
        
          <Box className="col-12 col-md-2" sx={{textAlign:"center", backgroundColor:"#0F1228", borderTopRightRadius:"10px", borderBottomRightRadius:"10px", padding:"1rem"}}>
            <p>ur gey</p>
          </Box>
          
        </Grid>
      </>
    </>
    
  )
}

export default Dashboard