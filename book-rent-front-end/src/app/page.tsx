import Image from "next/image";
import Login from "../components/Login";
export default function Home() {
  return (
    <div className="flex flex-col bg-[#FEF4E8] h-screen justify-center">
      <div className="flex justify-center items-center gap-60">
        <div className="flex-col items-center">
          <div className="flex-col space-y-2">
            <h1 className="flex text-4xl font-bold justify-center items-center">
              Chào mừng trở lại!
            </h1>
            <div className="flex rounded justify-center items-center">
              <Image
                src="/landing_page.png"
                width={300}
                height={300}
                alt="landing page picture"
              />
            </div>
          </div>
        </div>

        <div className="mx-0 w-4/12">
          <Login></Login>
        </div>
      </div>
    </div>
  );
}
