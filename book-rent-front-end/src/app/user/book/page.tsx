"use client";
import { useState, useEffect } from "react";
import Newest from "@/components/Newest";
import { Book, BookSide } from "@/components/Book";
import FilterBook from "@/partial/FilterBook";

const fetchData = async (setBooks) => {
  try {
    const res = await fetch("http://localhost:8000/book/");
    const data = await res.json();
    setBooks(data);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

export default function BookPage() {
  return (
    <div>
      <FilterBook />
      <div className="w-10/12 bg-white">
        <Newest fetch={fetchData} itemsPerPage={10} />
      </div>
    </div>
  );
}
