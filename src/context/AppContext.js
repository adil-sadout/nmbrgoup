import { createContext, useState } from "react";

const valuesContext = createContext();

const AppContext = ({ children }) => {

  const money = new Intl.NumberFormat('en-US',
  { style:'currency', currency: 'USD' });
  
  
    const [web3, setWeb3] = useState(undefined);
    const [tokenPrice, setTokenPrice]= useState(1750.69);
    const [walletAddy, setWalletAddy] = useState(undefined);

    

    const value={
        web3,
        setWeb3,
        tokenPrice,
        money,
        walletAddy,
        setWalletAddy
    }
    
    
    return (
      <valuesContext.Provider value={value}>
        {children}
      </valuesContext.Provider>
    );
  };

  export {AppContext, valuesContext}