import BarChart from "../component/charts/BarChart"
import { useContext, useState} from 'react';
import { Web3Context } from '../context/AppContext';
import truncateEthAddress from 'truncate-eth-address'


function Dashboard() {

  const {web3} = useContext(Web3Context)


  return (
    <>
      
        <div className="container grid row g-1 rounded p-3 m-auto secondary-bg">
          
          <div className="col-12 col-md-2 text-center rounded py-3 px-1 primary-bg ">
            <p>Wallet Addy</p>
            {
              (web3?.currentProvider?.selectedAddress !==undefined)?
              <p>{truncateEthAddress(web3?.currentProvider?.selectedAddress)}</p>:
              <p>Please Connect First</p>
            }
            
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
    
  )
}

export default Dashboard