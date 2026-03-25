import axios from 'axios'
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import HomePage from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrdersPage from './pages/orders/OrdersPage'
import './App.css'

function App() {

  const[cart, setCart]= useState([]);

  
  useEffect( () => {
    const fetchAppData= async () =>{
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };

    fetchAppData();

  }, [] );


  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route> 
      <Route path="checkout" element={<CheckoutPage cart={cart} />}></Route> 
      <Route path="orders" element={<OrdersPage cart={cart}/>}></Route>
    </Routes>
  )
}

export default App
