import TopBar from "../../../components/TopBar";

import SideBar from "@/components/SideBar";
import Content from "@/components/Content";
import RecSys from "@/components/RecSys";
export default function HomeUser() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="space-8  col-span-4">
        <Content />
      </div>
      <div className=" cols-span-1">
        <RecSys />
      </div>
    </div>
  );
}
