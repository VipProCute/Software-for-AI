import Image from "next/image"
import TabCard from "../components/tabCard";
import BoboCard from "../components/boboCard";

export default function Home() {
  return (
    <div className="relative w-full lg:grid lg:min-h-[600px] xl:min-h-[800px] lg:grid-cols-2">
      <div className="absolute top-0 left-0 p-4">
        <BoboCard />
      </div>
      <div className="flex justify-center items-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <TabCard/>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/lib.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}