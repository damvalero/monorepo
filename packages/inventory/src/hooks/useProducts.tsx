// import axios from "axios";
import React, { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json()
      console.log(data)
        setProducts(data)
    //   if (response && response.data) setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
};
