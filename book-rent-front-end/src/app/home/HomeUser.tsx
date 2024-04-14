import Image from "next/image";
import TopBar from "../../components/TopBar";
import Newest from "../../components/Newest";
import Trend from "../../components/Trend";
import Filter from "../../components/Filter";
import SideBar from "@/components/SideBar";
import Content from "@/components/Content";
import RecSys from "@/components/RecSys";
export default function HomeUser() {
  return (
    <div className="space-y-4">
      <TopBar />
      <div className="flex space-x-2 bg-main-color">
        <SideBar />
        <div className="space-8 w-7/12">
          <Content />
        </div>
        <div className="w-2/12 justify-end">
          <RecSys />
        </div>
      </div>
    </div>
  );
}
