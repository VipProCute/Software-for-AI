"use client";
import { useState, useEffect } from "react";
import { Book, BookSide } from "./Book";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 8;
const fetchData = async (setBooks) => {
  try {
    const res = await fetch("http://localhost:8000/book/");
    const data = await res.json();
    setBooks(data);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};
export default function Newest({ fetch, itemsPerPage }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(setBooks);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItems={books.length}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <div className="flex flex-wrap w-full justify-start gap-4 text-center flex-grow-0 flex-shrink-0">
        {selectedBooks.map((book, index) => (
          <Book key={index} data={book} />
        ))}
      </div>
    </div>
  );
}
