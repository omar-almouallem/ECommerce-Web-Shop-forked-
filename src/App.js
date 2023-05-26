import React, { useState, useEffect } from "react";
import {Products,Navbar} from "./components";

import { commerce } from "./lib/commerce";
import { Cart } from "@chec/commerce.js/features/cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]= useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart= async () =>{
 setCart(await commerce.cart.retrieve())
  }
  const handelAddToCart = async (productId,quantity)=>{
    const item = await commerce.cart.add(productId,quantity)
    setCart(item.cart)
  }
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(products);
  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handelAddToCart} />
    </div>
  );
};

export default App;
