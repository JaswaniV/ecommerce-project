import api from "../../apii"; 
import { useEffect, useState } from "react";
import Header from "../../components/Header"; 
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage( { cart, loadCart } ) { //Destructured the cart prop that is being passed from App.jsx
  const[products, setProducts] = useState([]); //Making initial values as empty 

  
  useEffect(() => {
    const getHomeData = async () => {
      const response = await api.get('/api/products');
      setProducts(response.data);
    };

    getHomeData();
  }, []); //Passed and empty dependency array to make sure that the API call is made only once when the component is mounted



  return (
    <>
      <title>Home</title>
      <link rel="icon" type="image/png" href="/home-favicon.png" />

      < Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
