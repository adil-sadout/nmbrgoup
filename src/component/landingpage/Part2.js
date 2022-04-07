import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

function Part2() {
  return (
    <>
        <Paper elevation={3} className="p-5 " style={{backgroundColor:"#1D224F"}} sx={{ borderRadius:"20px"}}>
            <div className="grid row p-1 px-sm-5">
                <Box className="col-md-6  d-flex flex-column justify-content-center ">
                    <p className="fw-bold fs-6" style={{ color:"#d81384"}}>PLANNED PROFITABILITY</p>
                    <h2 className="fs-1 p-0" style={{color:"white"}}>Encouraged Profit Taking</h2>
                    <p className="fs-5" style={{color:"white"}}>Our dynamic tax system ensures that no one person can cause massive swings in price. By dynamically raising the tax when a transaction negatively affects Sphere's liquidity.</p>
                </Box>
                <Box className="col-md-6 d-flex justify-content-center align-items-center p-1 p-md-3">
                        <img src="assets/computer.png" width="100%" alt="" />
                        
                </Box>
            </div>
        </Paper>
    </>
  )
}

export default Part2