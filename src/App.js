import Navbar from "./component/navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import LandingPage from "./route/LandingPage";
import Dashboard from "./route/Dashboard";
import Calculator from "./route/Calculator";
import Swap from "./route/Swap";
import Docs from "./route/Docs";
import ParticlesBack from "./component/particles/ParticlesBack"

function App() {

  


  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <ParticlesBack/>
      
      <div className="container py-4" >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Swap" element={<Swap />} />
          <Route path="/Docs" element={<Docs />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
