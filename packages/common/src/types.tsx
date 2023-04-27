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
  options: string[];
  selectName: string;
  onValueSelected: (filterValue: string) => void;
  // onOrderValueSelected?: (orderValue: string) => void;
}

export interface PaginationProps {
  totalPosts: number
  productsPerPage: number
  setCurrentPage:(page:number) => void
  currentPage: number
}