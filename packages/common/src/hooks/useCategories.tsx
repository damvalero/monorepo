import { useEffect, useState } from "react";
import { Product } from "../types";

interface Props {
    products: Product[]
}

export const useCategories = ({ products }: Props) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = new Set<string>();
    products.forEach((product) => {
      uniqueCategories.add(product.category);
    });
    setCategories([...uniqueCategories].sort());
  }, [products]);

  return { categories };
};
