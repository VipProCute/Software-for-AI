import Link from "next/link";

export default function TopBar() {
  return (
    <div className="navbar bg-main-color">
      <div className="flex-none ">
        <div className="w-10 rounded">
          <img src="/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="flex-none pr-10">
        <span className="text-lg">Mượn sách đi</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <label className="input input-md input-bordered w-full flex items-center gap-2 pr-0">
          <input
            type="text"
            className="grow"
            placeholder="Bạn tìm sách gì hôm nay"
          />
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </div>
      <div className="flex justified-end space-x-8 px-5">
        <button className="btn btn-square btn-ghost whitespace-nowrap text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
              clipRule="evenodd"
            ></path>
          </svg>
          Thông báo
        </button>
        <button className="btn btn-square btn-ghost whitespace-nowrap text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
              clipRule="evenodd"
            ></path>
          </svg>
          Lịch hẹn
        </button>
        <button className="btn btn-square btn-ghost whitespace-nowrap text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"
              clipRule="evenodd"
            ></path>
          </svg>
          Tài khoản
        </button>
      </div>
    </div>
  );
}
