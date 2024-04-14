"use client";
import { useState, useEffect } from "react";
import { Book, BookSide } from "./Book";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 3;

export default function Trend() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/book/");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log("Fetch error: ", error);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedBooks = books.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col flex-wrap w-full justify-start gap-2 text-center items-center  flex-shrink bg-white">
      <h1 className="card-title object-fit ">Có thể bạn sẽ thích</h1>
      {selectedBooks.map((book, index) => (
        <BookSide key={index} data={book} />
      ))}
    </div>
  );
}
