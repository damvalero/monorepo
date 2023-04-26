import { useState, useMemo } from "react";
import {
  Loading,
  Title,
  useProducts,
  Card,
  useCategories,
  Select,
} from "@bussiness/common";
import "./App.css";
import { Product } from "@bussiness/common/src/types";

function App() {
  const { products } = useProducts();
  const { categories } = useCategories({ products });
  const order = ["upward", "downward"];
  const [updateFilterText, setUpdateFilterText] = useState("all");
  const [updateOrderText, setUpdateOrderText] = useState("all");
  const PAGE_TITLE = "Ecommerce";
  const ORDER_TEXT = "Sort";
  const CATEGORY_TEXT = "Filter by Category";

  const onFilterValueSelected = (filterValue: string) => {
    setUpdateFilterText(filterValue);
  };

  const onOrderValueSelected = (orderValue: string) => {
    setUpdateOrderText(orderValue);
  };

  const filteredProducts = useMemo<Product[]>(() => {
    if (updateFilterText === "all") {
      return products;
    } else {
      return products.filter(
        (product) => product.category === updateFilterText
      );
    }
  }, [products, updateFilterText]);

  const sortedProducts = useMemo<Product[]>(() => {
    if (updateOrderText === "upward") {
      return filteredProducts.sort((a, b) => {
        return a.title.localeCompare(b.title.toString());
      });
    } else {
      return filteredProducts.sort((a, b) => {
        return b.title.localeCompare(a.title.toString());
      });
    }
  }, [products, updateOrderText]);

  if (products.length <= 0)
    return (
      <>
        <div className="page-margin">
          <div className="page-space">
            <Loading />
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="page-margin">
        <div className="page-space">
          <Title title={PAGE_TITLE} />
          <div className="page-filter">
            <div>
              <p className="text-margin">{ORDER_TEXT}</p>
              <Select
                selectName={"Order"}
                options={order}
                onValueSelected={onOrderValueSelected}
              />
            </div>
            <div>
              <p className="text-margin">{CATEGORY_TEXT}</p>
              <Select
                selectName={"Categories"}
                options={categories}
                onValueSelected={onFilterValueSelected}
              />
            </div>
          </div>
          <ul className="card-list">
            <Card products={filteredProducts} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
