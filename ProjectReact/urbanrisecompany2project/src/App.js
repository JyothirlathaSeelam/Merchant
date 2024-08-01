import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes, } from "react-router-dom";
import Pricedetails from './Pages/Pricedetails';
import Overview from './Pages/overview';
import LandingPage from './Pages/LandingPage';
import Layout from "./Components/Layout"
import Features from './Pages/Features';
import Amenities from './Pages/Amenities';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div className="App">
      <Layout>
<Navbar />
 <LandingPage /> 
 <Overview  />   
 <Pricedetails  />  
 <Features />
 <Amenities />
 <Gallery  />
{/* <Routes>
  <Route  path="/"  element={<LandingPage  />}  />
  <Route  path="/overview"  element={<Overview  />}  />
  <Route  path="/pricedetails"  element={<Pricedetails  />}  />
  <Route  path="/projecthighlights"  element={<Projecthighlights  />}  />

</Routes> */}

</Layout>
    </div> 
  );
}

export default App;
