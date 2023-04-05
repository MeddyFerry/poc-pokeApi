// Pagination.js
import React from "react";

interface Props {
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({ totalPosts, postsPerPage, paginate }: Props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              className="page-link p-3 mx-1"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
