import React from "react";
import { useState } from "react";

export const usePagination = ({ pokemonList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemonList.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(pokemonList.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return {
    currentPosts,
    pagination: (
      <nav>
        <ul className="flex">
          {pageNumbers.map((number) => (
            <li key={number} className="px-4">
              <button
                onClick={() => setCurrentPage(number)}
                className="text-gray-700 hover:text-gray-900"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    ),
  };
};
