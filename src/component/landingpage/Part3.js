import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

function Part3() {
  return (
    <>
      <div  className="p-5 text-center d-flex flex-column justify-content-center align-items-center text-dark fadedbg" style={{borderRadius:"20px", minHeight:"70vh"}}>
        <div className="pb-5">
          <p className="fw-bold fs-6 text-dark">DEEP DEEP POOLS</p>
          <h2 className="display-1 fw-bold p-0 text-light pb-5">Liquidity</h2>
          <p className="fs-5 text-light" >Sphere strategically buys back it's own liquidity which allows us to collect a yield on our own transactions.</p>
        </div>
        <div className="grid row p-2">
          <div className="col-12 col-md-4">
            <p className="fw-bold fs-6  text-dark">TREASURY BALANCE</p>
            <h2 className="display-3 fw-bold p-1 text-light">$12.27M</h2>
          </div>
          <div className="col-12 col-md-4">
            <p className="fw-bold fs-6 text-dark">MARKET CAP</p>
            <h2 className="display-3 fw-bold p-1 text-light">92.01M</h2>
          </div>
          <div className="col-12 col-md-4">
            <p className="fw-bold fs-6 text-dark" >APY</p>
            <h2 className="display-3 fw-bold p-1 text-light">99.90K%</h2>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Part3