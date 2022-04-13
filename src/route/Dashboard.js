import BarChart from "../component/charts/BarChart"
import { useContext} from 'react';
import { valuesContext } from '../context/AppContext';



function Dashboard() {

  const {web3, tokenPrice, money, walletAddy} = useContext(valuesContext)
  
  
  return (
    <>
      
        <div className="container grid row g-1 borderRadiusRounded p-3 m-auto secondary-bg">
          
          <div className="col-12 col-md-2 text-center rounded py-3 px-1 primary-bg ">
            <p>Wallet Addy</p>
            {
              (walletAddy !==undefined)?
              <p>{walletAddy}</p>:
              <p>Please Connect First</p>
            }
            
          </div>

          <div className="col-12 col-md-8 py-1 p-sm-3 fw-bold" style={{letterSpacing:"1.5px"}}>
            <p>Chart</p>
            <BarChart/>
          </div>
        
          <div className="col-12 col-md-2 text-center rounded py-3 px-1 primary-bg" >
            <p>Token Price</p>
            <p>{money.format(tokenPrice)}</p>
          </div>
          
        </div>
      
    </>
    
  )
}

export default Dashboard