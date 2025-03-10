import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";  // Import Cart Context
import AddToCart from "./components/Layouts/AddToCart";  // Add to Cart Page
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Home from './pages/home/Home';
function App() {
  return (
    <CartProvider>
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addtocart" element={<AddToCart/>} />

      </Routes>
   </Router>
   </CartProvider>
  );
}

export default App;
