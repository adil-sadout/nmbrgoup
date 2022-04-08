import React from 'react'
import {NavLink} from "react-router-dom"

function LandingNavbar() {
  return (
    <div className='fs-4 m-0 p-0 d-flex justify-content-between align-items-center' style={{ minHeight:"100px"}}>
        
        <div className='p-1'>
            <NavLink to="/Dashboard">
              <button className='btnStyle fs-5 px-3 py-2'>DASHBOARD</button>
            </NavLink>
        </div>
    </div>
    
  )
}

export default LandingNavbar