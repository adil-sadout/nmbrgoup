import React from 'react'
import {NavLink} from "react-router-dom"




function DashboardNavbar() {

    
    


  return (
    <div className='text-center d-none d-md-flex justify-content-end align-items-center fs-5' style={{minHeight:"100px"}}>
        
    
        <div className='d-flex justify-content-around align-items-center' style={{width:"500px"}}>

            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #BFDBF7' :"white",
                        paddingBottom: isActive ? "5px":"0",
                        color: isActive ? "#BFDBF7":"white",
                        padding:"inherit 10px"
                      })}
                    to="/Dashboard">Dashboard</NavLink>
            
            
            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #BFDBF7' :"white",
                        color: isActive ? "#BFDBF7":"white",
                        paddingBottom:isActive? "5px":"0"
                      })}
                    to="/Calculator">Calculator</NavLink>
            

            
                    <NavLink 
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '2px solid #BFDBF7' :"white",
                        paddingBottom:isActive? "5px":"0",
                        color: isActive ? "#BFDBF7":"white",
                      })}
                    to="/Swap">Swap</NavLink>

                    <NavLink to="#">
                        <button className='btnStyle fs-5 px-3 py-2' >Connect</button>
                    </NavLink>
            

            

        </div>
        
        
        
        
    </div>
  )
}

export default DashboardNavbar