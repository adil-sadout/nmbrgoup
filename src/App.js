import Navbar from "./component/navbar/Navbar";
import {Routes, Route,} from "react-router-dom";

import LandingPage from "./route/LandingPage";
import Dashboard from "./route/Dashboard";
import Calculator from "./route/Calculator";
import Swap from "./route/Swap";
import Docs from "./route/Docs";
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <Container maxWidth="xl" sx={{padding:"2rem"}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Swap" element={<Swap />} />
          <Route path="/Docs" element={<Docs />} />
        </Routes>
      </Container>

    </div>
  );
}

export default App;
