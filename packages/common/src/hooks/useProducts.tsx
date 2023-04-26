import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      if (response && response.data) setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
};
