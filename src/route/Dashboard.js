import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import BarChart from "../component/charts/BarChart"
function Dashboard() {
  return (
    <>
      <Container>
      <Grid container spacing={2} sx={{backgroundColor:"#202337", borderRadius:"1rem", padding:"10px"}}>
        <Grid item xs={3} sx={{textAlign:"center", backgroundColor:"#0F1228", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", padding:"1rem"}}>
          <Box sx={{fontWeight:"bold", letterSpacing:"1.5px"}}>
            <p>PORTFOLIO</p>
            <p>0x3096...A246</p>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{textAlign:"center", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", padding:"1rem"}}>
          <Box sx={{fontWeight:"bold", letterSpacing:"1.5px"}}>
            <p>Chart</p>
            <BarChart/>
          </Box>
        </Grid>
       
        <Grid item xs={3} sx={{textAlign:"center", backgroundColor:"#0F1228", borderTopRightRadius:"10px", borderBottomRightRadius:"10px", padding:"1rem"}}>
          <Box>ur gey</Box>
        </Grid>
        
      </Grid>
      </Container>
    </>
    
  )
}

export default Dashboard