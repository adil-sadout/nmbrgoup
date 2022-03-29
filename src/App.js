import Navbar from "./component/navbar/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./route/LandingPage";
import Dashboard from "./route/Dashboard";
import Calculator from "./route/Calculator";
import Swap from "./route/Swap";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Swap" element={<Swap />} />
      </Routes>

    </div>
  );
}

export default App;
