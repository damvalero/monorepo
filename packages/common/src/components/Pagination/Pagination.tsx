import "./pagination.css";
import { PaginationProps } from "../../types";

const Pagination = ({
  totalPosts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
