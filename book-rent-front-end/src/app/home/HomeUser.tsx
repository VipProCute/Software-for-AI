import Image from "next/image";
import TopBar from "../../components/TopBar";
import Newest from "../../components/Newest";
import Trend from "../../components/Trend";
import Filter from "../../components/Filter";
export default function HomeUser() {
  return (
    <div className="space-y-4">
      <TopBar />
      <div className="flex space-x-4">
        <Filter />
        <div className="space-y-8">
          <Newest />
          <Trend />
        </div>
      </div>
    </div>
  );
}
