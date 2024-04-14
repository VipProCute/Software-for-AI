import { useState, useEffect } from "react";
import { Book, BookSide } from "./Book";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 8;

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
    <div>
      <Pagination
        currentPage={currentPage}
        totalItems={books.length}
        onPageChange={setCurrentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      <div className="flex flex-wrap w-full justify-start gap-4 text-center flex-grow-0 flex-shrink-0">
        {selectedBooks.map((book, index) => (
          <Book key={index} data={book} />
        ))}
      </div>
    </div>
  );
}
