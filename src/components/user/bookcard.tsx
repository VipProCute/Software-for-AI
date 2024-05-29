import { Book } from "@/lib/interface";
import { Badge } from "@/components/ui/badge";
import { Ratings } from "@/components/ui/rating";
import BookImage from "./bookimage";

export default function BookCard(
{ book, href } : { book: Book, href: string }) {
    return (
        <figure key={book._id}>
            <BookImage
                book={book}
                href={href}
                style={{width: "200px", height: "300px"}}
            />
            <figcaption 
                className="pt-2 space-y-2 text-wrap"
                style={{ width: '200px'}}
            >
                <div className="flex items-center space-x-2">
                    <Ratings 
                        rating={book.avgRating}
                        variant="yellow" 
                    />
                    <span className="text-muted-foreground text-sm">{book.avgRating}/5</span>
                </div>
                <div className="flex flex-wrap">
                    {book.genres.map((genre) => (
                        <Badge 
                            className="ml-0 mr-1 my-1"
                            variant={"outline"}
                        >
                            {genre}
                        </Badge>
                    ))}
                </div>
                <h3>{book.title}</h3>
                <div className="text-xs text-muted-foreground">
                    Tác giả: {" "}
                    <span className="font-semibold text-foreground">
                        {book.author}
                    </span>
                </div>
            </figcaption>
        </figure>
    )
}