"use client";

import { useState } from "react";
import Newest from "./Newest";
import Trend from "./Trend";

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
      {content === "Trending" ? <Trend /> : <Newest />}
    </div>
  );
}
