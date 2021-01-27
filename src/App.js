import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { commerce } from './Library/commerce';

const App = () => {
  const [ products, setProducts ] = useState([]);

  const fetchProducts = async () => {
     const { data } = await commerce.products.list();

     setProducts(data)
  }
 
  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products, "products");

  return (
    <div className="App">
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}

export default App;
