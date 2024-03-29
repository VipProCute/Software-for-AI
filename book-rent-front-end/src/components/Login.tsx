"use client";

import { useState } from "react";
import LoginForm from "../partial/LoginForm";

export default function Login() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  return (
    <div
      role="tablist"
      className="tabs tabs-lifted bg-[#FBC78D] bg-opacity-60 "
    >
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:#FBC78D] "
        aria-label="Người dùng"
        checked={selectedTab === 0}
        onClick={() => handleTabClick(0)}
      />
      <div
        role="tabpanel"
        className={`tab-content bg-[#FBC78D] border-base-300 rounded-box p-6 ${
          selectedTab === 0 ? "block" : "hidden"
        }`}
      >
        <LoginForm />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:#FBC78D]"
        aria-label="Thư viện"
        checked={selectedTab === 1}
        onClick={() => handleTabClick(1)}
      />
      <div
        role="tabpanel"
        className={`tab-content  bg-[#FBC78D] border-base-300 rounded-box p-6 ${
          selectedTab === 1 ? "block" : "hidden"
        }`}
      >
        <LoginForm />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:#FBC78D]"
        aria-label="Quản trị viên"
        checked={selectedTab === 2}
        onClick={() => handleTabClick(2)}
      />
      <div
        role="tabpanel"
        className={`tab-content  bg-[#FBC78D] border-base-300 rounded-box p-6 ${
          selectedTab === 2 ? "block" : "hidden"
        }`}
      >
        <LoginForm />
      </div>
    </div>
  );
}
