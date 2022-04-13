import {useState, useContext} from "react"
import {valuesContext} from "../context/AppContext"
function Calculator() {

  const {tokenPrice, money}=useContext(valuesContext)

  
  const [tokenOwned, setTokenOwned]= useState(1000)
  const [apy, setApy]= useState(1)
  const [returns, setReturns]= useState(0)

  const calculateReturns = ()=>{
    
    setReturns((tokenOwned)*(tokenPrice)*((apy)/100))
  }

  


  return (
    <div className="p-3 grid py-5">
      <div className="row d-flex justify-content-around">

      

          <div className="py-5 borderRadiusRounded secondary-bg col-12 col-md-5 text-center d-flex flex-column justify-content-center align-items-center my-1">
            <div className="d-flex flex-column col-10 pb-3">
              <label htmlFor="">Token Amount</label>
              <input className="form-control  text-center" type="number" value={tokenOwned} onChange={((e)=>{setTokenOwned(e.target.value)})}/>
            </div>
            <div className="d-flex flex-column col-10 pb-3">
              <label htmlFor="">APY</label>
              <input className="form-control text-center" value={apy} onChange={((e)=>{setApy(e.target.value)})} type="number" />
            </div>
            <div className="d-flex flex-column col-12">
              <p >Current Price</p>
              <p className="fs-5 fw-bold">{money.format(tokenPrice)}</p>
            </div>
            <div className="d-flex flex-column col-12 px-4 pt-3">
              <button className="btnStyle" onClick={calculateReturns}>Calculate Returns</button>
            </div>
          </div>
          
          <div className="col-1 p-3 d-none d-md-flex justify-content-center align-items-center">
            <img width="36px" src="assets/right-arrow.gif" alt="" />
          </div>
          <div className="col-1 p-3 d-md-none d-flex justify-content-center align-items-center">
            <img width="36px" src="assets/down-arrow.gif" alt="" />
          </div>

          <div className="py-5 borderRadiusRounded secondary-bg col-12 col-md-5 text-center d-flex flex-column justify-content-center align-items-center my-1">
            
            
              <p className="fw-bold fs-6">POTENTIAL RETURN</p>
              <p className="display-1 text-break">{money.format(returns)}</p>
              <p className="">Initial Investement Excluded</p>
            
          </div>

        </div>
    </div>
  )
}

export default Calculator