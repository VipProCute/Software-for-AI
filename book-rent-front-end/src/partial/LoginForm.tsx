import Link from "next/link";
export default function LoginForm() {
  return (
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-[#FBC78D]">
      <div className="text-2xl font-bold mb-2 text-center">Đăng nhập</div>
      <form className="flex flex-col gap-3">
        <div className="block relative">
          <label
            htmlFor="email"
            className="block cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Tài khoản
          </label>
          <input
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="password"
            className="block cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Mật khẩu
          </label>
          <input
            type="text"
            id="password"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div>
          <a className="text-sm text-[#7747ff]" href="#">
            Quên mật khẩu
          </a>
        </div>
        <button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          <Link href="./home">Đăng nhập</Link>
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Chưa có tài khoản ?{" "}
        <a className="text-sm text-[#7747ff]" href="#">
          Đăng ký tại đây
        </a>
      </div>
    </div>
  );
}
