
import BarChart from "../component/charts/BarChart"
function Dashboard() {
  return (
    <>
      < >
        <div className="container grid row g-1 rounded p-3 m-auto secondary-bg">
          
          <div className="col-12 col-md-2 text-center rounded py-3 px-1 primary-bg">
            <p>PORTFOLIO</p>
            <p>0x3096...A246</p>
          </div>

          <div className="col-12 col-md-8 py-1 p-sm-3 fw-bold" style={{letterSpacing:"1.5px"}}>
            <p>Chart</p>
            <BarChart/>
          </div>
        
          <div className="col-12 col-md-2 text-center rounded py-3 px-1 primary-bg" >
            <p>ur gey</p>
          </div>
          
        </div>
      </>
    </>
    
  )
}

export default Dashboard