import axios from 'axios'
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import './App.css'

function App() {

  const[cart, setCart]= useState([]);

  
  useEffect( () => {
     axios.get('/api/cart-items?expand=product')
      .then( (response) => {
        console.log(response.data);
        setCart(response.data);
      })  

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
