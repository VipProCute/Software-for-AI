"use client"

import { UserRoundPlus, Home, UsersRound, BookLock } from 'lucide-react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function AdminSidebar() {
    const menuList = [
        {
            link: "/admin",
            icon: <Home size={20} strokeWidth={2.5} />,
            text: "Trang chủ"
        },
        {
            link: "/admin/create_account",
            icon: <UserRoundPlus size={20} strokeWidth={2.5} />,
            text: "Cấp tài khoản"
        },
        {
            link: "/admin/manage_account",
            icon: <UsersRound size={20} strokeWidth={2.5} />,
            text: "Quản lý tài khoản"
        },
        {
            link: "/admin/manage_book",
            icon: <BookLock size={20} strokeWidth={2.5} />,
            text: "Quản lý sách"
        }
    ]

    const pathName = usePathname();

    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/admin" className="flex items-center gap-2 font-semibold">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width="57"
                        height="57"
                    />
                    <p className="font-bold text-inherit">THƯ VIỆN BOBO</p>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-5">
                    {menuList.map((item, index) => (
                        <Link 
                            href={item.link} 
                            key={index}
                            className="items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200"
                        >
                            <div className={cn(
                                "flex",
                                {
                                    "text-primary": item.link == pathName
                                }
                            )}>
                                <span className="mr-2">{item.icon}</span>
                            {item.text}
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex justify-center mt-auto p-10">
                <Button className='bg-primary text-white'>
                    Đăng xuất
                </Button>
            </div>
        </div>
    );
}