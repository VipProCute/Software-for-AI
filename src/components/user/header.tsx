import NavBar from "@/components/user/navbar";
import UserAvatar from "./avatar";
import { userTest } from "@/lib/test";
import SearchBox from "./searchbox";

export default function SiteHeader() {
    return (
         <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <NavBar/>
                <div className="flex flex-1 items-center justify-between space-x-7 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <SearchBox />
                    </div>
                    <nav className="flex items-center">
                        <UserAvatar props={userTest} />
                    </nav>
                </div>
            </div>
         </header>
    );
}