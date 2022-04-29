import {NavLink} from "react-router-dom";

function Part1() {
  
  return (
      <>
        
        
        <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{height:"80vh"}}>
            <p className="display-1 fw-bold" >
            Nmber Go Up
            </p>
            <p>
            With one token get exposure to a diversified portfolio of projects across multiple chains.
            </p>
            <div className="py-5">
              <NavLink to="/dashboard">
                <button className="btnStyle fs-5 m-1">Enter App</button>
              </NavLink>
              

              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <button className="btnStyle fs-5 m-1">Documentation</button>
              </a>
                
                
            </div>
        </div>
      </>
    
  )
}

export default Part1