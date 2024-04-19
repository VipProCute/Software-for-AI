import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <TopBar />
      <div className="flex space-x-2 bg-main-color">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
