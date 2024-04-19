"use client";
import { useState, useEffect } from "react";
import { Book, BookSide } from "./Book";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 3;
const fetchData = async (setBooks) => {
  try {
    const res = await fetch("http://localhost:8000/book/");
    const data = await res.json();
    setBooks(data);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};
export default function RecSys() {
  const [books, setBooks] = useState([]);
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
  const selectedBook = books.slice(0, 3);
  return (
    <div className="flex flex-col flex-wrap w-full justify-start gap-2 text-center items-center  flex-shrink bg-white">
      <h1 className="card-title object-fit ">Có thể bạn sẽ thích</h1>
      {selectedBook.map((book, index) => (
        <BookSide key={index} data={book} />
      ))}
    </div>
  );
}
