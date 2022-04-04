import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

function Part3() {
  return (
    <>
      <Paper elevation={0} sx={{marginY:"100px",textAlign:"center",height:"95vh", backgroundColor:"inherit", flexDirection:"column",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box sx={{padding:"50px"}}>
        <p className="fw-bold fs-6" style={{ color:"#d81384"}}>DEEP DEEP POOLS</p>
        <h2 className="display-1 fw-bold p-0" style={{color:"white"}}>Liquidity</h2>
        <p className="fs-5" style={{color:"white"}}>Sphere strategically buys back it's own liquidity which allows us to collect a yield on our own transactions.</p>
        </Box>
        <Box  sx={{padding:"50px"}} className="grid row">
          <div className="col-12 col-md-6">
            <p className="fw-bold fs-6" style={{ color:"#d81384"}}>TREASURY BALANCE</p>
            <h2 className="display-3 fw-bold p-0" style={{color:"white"}}>$12.27M</h2>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-bold fs-6" style={{ color:"#d81384"}}>MARKET CAP</p>
            <h2 className="display-3 fw-bold p-0" style={{color:"white"}}>92.01M</h2>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-bold fs-6" style={{ color:"#d81384"}}>APY</p>
            <h2 className="display-3 fw-bold p-0" style={{color:"white"}}>99.90K%</h2>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-bold fs-6" style={{ color:"#d81384"}}>TOTAL WALLETS</p>
            <h2 className="display-3 fw-bold p-0" style={{color:"white"}}>14.88K</h2>
          </div>
        </Box>
      </Paper>
    </>
  )
}

export default Part3