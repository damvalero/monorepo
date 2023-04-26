import "./App.css";
import { Loading, Title, useProducts } from "@bussiness/common";
import Table from "./components/Table/Table";

function App() {
  const { products } = useProducts();
  const PAGE_TITLE =  "store inventory"

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
          <Table products={products} />
        </div>
      </div>
    </>
  );
}

export default App;
