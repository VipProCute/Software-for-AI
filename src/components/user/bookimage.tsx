import { Book } from "@/lib/interface";
import { Book as BookIcon, BookPlus} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BookProps extends React.HTMLAttributes<HTMLDivElement> {
    book: Book,
    href: string
}

export default function BookImage({
    book, 
    href, 
    style,
    className
} : BookProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div 
                    className={cn("overflow-hidden flex rounded-md", className)}
                    style={style}>
                    <Image 
                        src={book.imageUrl}
                        alt={book.title}
                        height={200}
                        width={300}
                        className="object-cover transition-all hover:scale-105"
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-1 border-slate-500">
                <DropdownMenuGroup className="w-40">
                    <DropdownMenuItem>
                        <Link href={href} className="flex">
                            <BookIcon className="mr-2 h-4 w-4"/> 
                            Xem sách
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <Link href={href} className="flex">
                            <BookPlus className="mr-2 h-4 w-4"/> 
                            Mượn sách
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}