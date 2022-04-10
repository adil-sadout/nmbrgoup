import { createContext, useState } from "react";

const Web3Context = createContext();

const AppContext = ({ children }) => {
    const [web3, setWeb3] = useState(undefined);

    const value={
        web3,
        setWeb3
    }
    
    
    return (
      <Web3Context.Provider value={value}>
        {children}
      </Web3Context.Provider>
    );
  };

  export {AppContext, Web3Context}