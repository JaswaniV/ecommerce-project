import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header"; 
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage( { cart } ) { //Destructured the cart prop that is being passed from App.jsx
  const[products, setProducts] = useState([]); //Making initial values as empty 

  
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    getHomeData();
  }, []); //Passed and empty dependency array to make sure that the API call is made only once when the component is mounted



  return (
    <>
      <title>Home</title>

      < Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;
