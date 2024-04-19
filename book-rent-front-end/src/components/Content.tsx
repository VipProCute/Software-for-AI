"use client";

import { useState } from "react";
import Newest from "./Newest";
import Trend from "./Trend";
const fetchData = async (setBooks) => {
  try {
    const res = await fetch("http://localhost:8000/book/");
    const data = await res.json();
    setBooks(data);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};
export default function Content() {
  const [content, setContent] = useState("Trending");

  return (
    <div className="bg-white">
      <ul className="menu menu-horizontal gap-5">
        <li>
          <a
            className={
              content === "Trending" ? "active rounded-xl" : "rounded-xl"
            }
            onClick={() => setContent("Trending")}
          >
            Xu hướng
          </a>
        </li>
        <li>
          <a
            className={
              content === "Newest" ? "active rounded-xl" : "rounded-xl"
            }
            onClick={() => setContent("Newest")}
          >
            Sách mới
          </a>
        </li>
      </ul>
      {content === "Trending" ? (
        <Trend />
      ) : (
        <Newest fetch={fetchData} itemsPerPage={8} />
      )}
    </div>
  );
}
