import React from "react";
import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./assets/components/pages/HomePage";
import MenuPage from "./assets/components/pages/MenuPage";
import PaymentPage from "./assets/components/pages/PaymentPage";
import PickUp from "./assets/components/pages/PickUp";
import Preparation from "./assets/components/pages/Preparation";

function App() {
  return (
    <Router>            
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/pickup" element={<PickUp/>} />
      </Routes>      
    </Router>
  );
}
if(window.location.pathname == '/preparation'){
  setTimeout(() => {
    window.location.pathname = '/pickup'
  }, 5000);
}

export default App;