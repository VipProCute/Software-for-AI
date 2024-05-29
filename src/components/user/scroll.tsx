"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import BookCard from "./bookcard";
import { Book } from "@/lib/interface";

export default function ScrollPane(
    {books} : {
        books: Book[],
    }
) {
    return (
        <ScrollArea 
        className="whitespace-nowrap rounded-md border w-max relative">
            <div className="flex space-x-10 p-4">
                {books.map((book) => (
                    <BookCard 
                        book={book} 
                        href={`user/book/${book._id}`}
                    />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}