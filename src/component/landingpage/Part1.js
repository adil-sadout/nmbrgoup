

function Part1() {
  
  return (
      <>
        <div className="position-absolute overflow-hidden bg-transparent" style={{zIndex:"-10"}}>
            <img src="assets/brainglow3.png" width="80%" alt="" />
        </div>
        
        <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{height:"80vh"}}>
            <p className="display-1 fw-bold" >
            Nmber Go Up
            </p>
            <p>
            With one token get exposure to a diversified portfolio of projects across multiple chains.
            </p>
            <div className="py-5">
                <button className="btnStyle fs-5" style={{margin:"0 20px 5px 0", }} >Enter App</button>
                <button className="btnStyle fs-5" style={{margin:"0 0px 5px 0",}}  >Documentation</button>
            </div>
        </div>
      </>
    
  )
}

export default Part1