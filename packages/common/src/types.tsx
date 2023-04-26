export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export interface PropsTitle {
  title: string;
}

export interface PropsCard {
  products: Product[];
}

export interface SelectProps {
  categories: string[];
  onFilterValueSelected: (filterValue:string) => void
}