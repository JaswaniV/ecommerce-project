import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route> 
      <Route path="TestCheckout" element={<div>Test Checkout Page</div>}></Route> 
    </Routes>
  )
}

export default App
