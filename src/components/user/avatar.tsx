import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { User } from "@/lib/interface"
import { 
  CircleUser,
  LibraryBig,
  LogOut,
  Stamp
} from "lucide-react";
import Link from "next/link";
import { SignOut } from "@/lib/action";
import { Button } from "../ui/button";
import Image from "next/image";

export default function UserAvatar({user} : {user: User}) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar>
                <AvatarImage 
                  src={user.avatarURL}
                  alt={user.username}
                  asChild
                >
                  <Image src={user.avatarURL} alt={user.username} width={40} height={40} />
                </AvatarImage>
                <AvatarFallback>User</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
            <DropdownMenuLabel>Xin chào {user.name} ⭐</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href="/user/profile" 
                  className="flex"
                >
                  <CircleUser className="mr-2 h-5 w-5"/>
                  <span>Thông tin cá nhân</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#" 
                  className="flex"
                >
                  <LibraryBig className="mr-2 h-5 w-5"/>
                  <span>Thẻ thư viện</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#" 
                  className="flex"
                >
                  <Stamp className="mr-2 h-5 w-5"/>
                  <span>Yêu cầu duyệt</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form 
                className="flex"
                action={SignOut}
              >
                <Button className="text-[#F25278]" variant="ghost">
                  <LogOut className="mr-2 h-5 w-5"/>
                  Đăng xuất
                </Button>
              </form>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}