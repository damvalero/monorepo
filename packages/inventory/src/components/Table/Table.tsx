// import { Product } from "@bussiness/common/src/types";
import { Product } from "@bussiness/common/src/types";
import { useState } from "react";

interface PropsTable {
  products: Product[];
}

const Table = ({ products }: PropsTable) => {
  const [tableProducts, setTableProducts] = useState(products);
  const [order, setOrder] = useState("ASC");
  const sorting = (col: keyof Product) => {
    if (order === "ASC") {
      const arrange = [...tableProducts].sort((a, b) => {
        if (typeof a[col] === "number" && typeof b[col] === "number") {
          return a[col] - b[col];
        } else {
          return a[col].toString().localeCompare(b[col].toString());
        }
      });
      setTableProducts(arrange);
      setOrder("DES");
    }
    if (order === "DES") {
      const arrange = [...tableProducts].sort((a, b) => {
        if (typeof a[col] === "number" && typeof b[col] === "number") {
          return b[col] - a[col];
        } else {
          return b[col].toString().localeCompare(a[col].toString());
        }
      });
      setTableProducts(arrange);
      setOrder("ASC");
    }
  };

  return (
    <div>
      <table className="table table-striped" >
        <thead className="table-primary" >
          <tr>
            <th onClick={() => sorting("title")}>Title</th>
            <th onClick={() => sorting("category")}>Category</th>
            <th onClick={() => sorting("price")}>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableProducts.map((product) => {
            return (
              <tr 
              key={product.id} 
              >
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
