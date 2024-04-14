import React, { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const nPages = Math.ceil(totalItems / itemsPerPage);

  const pages = useMemo(() => Array.from(Array(nPages).keys()), [nPages]);

  return (
    <div className="flex justify-end items-baseline mr-5">
      <button
        className="btn btn-sm btn-circle bg-white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      >
        «
      </button>
      <span className="mr-2 text-sm">Trang trước</span>
      {pages.map((page) => (
        <button
          key={page}
          disabled={page + 1 === currentPage}
          onClick={() => onPageChange(page + 1)}
        ></button>
      ))}
      <span className="ml-5 text-sm">Trang sau</span>
      <button
        className="btn btn-sm btn-circle bg-white"
        disabled={currentPage === nPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, nPages))}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
