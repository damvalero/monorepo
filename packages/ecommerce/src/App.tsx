import { useState, useMemo} from 'react'
import { Loading, Title, useProducts, Card, useCategories, Select } from "@bussiness/common";
import "./App.css";
import { Product } from '@bussiness/common/src/types';

function App() {
  const { products } = useProducts();
  const { categories } = useCategories({products});
  const [updateFilterText, setUpdateFilterText] = useState('all');
  const PAGE_TITLE = "all products";
  const CATEGORY_TEXT = "Filter by Category";

  const onFilterValueSelected = (filterValue:string) => {
    setUpdateFilterText(filterValue)
  }

  const filteredProducts = useMemo<Product[]>(() => {
    if(updateFilterText === 'all') {
      return products
    } else {
      return products.filter(product => product.category === updateFilterText)
    }
  }, [products, updateFilterText])

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
          <p className='text-margin' >{CATEGORY_TEXT}</p>
          <Select
            categories={categories}
            onFilterValueSelected={onFilterValueSelected}
          />
          <ul className="card-list">
            <Card products={filteredProducts} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
