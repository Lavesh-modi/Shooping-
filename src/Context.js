// import { createContext, useContext, useState } from "react";
import { useState, useEffect, createContext, useContext } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductsArray(data.slice(0, 20));
      console.log("setProductsArray", productsArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  productsArray.map((product) => ({
    id: product.id,

    name: product.category,
    price: product.price,
    image: product.image,
  }));

  // const [products,setProducts] = useState(productsArray);

  return (
    <Cart.Provider value={{ cart, setCart, productsArray }}>
      {children}
    </Cart.Provider>
  );

  // console.log(products,"products")
};

// export const CartState = () => {
//   return useContext(Cart);
// };

export default Context;
