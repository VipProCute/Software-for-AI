import { Book } from "@/lib/interface";
import { 
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableCell,
    TableRow
} from "@/components/ui/table";
import BookImage from "./bookimage";

function DisplayList({list} : {list: string[]}) {
    return (
        <div className="space-y-1">
            {list.map((val) => (
                <li>{val}</li>
            ))}
        </div>
    )
}

function ToDateID(id: string) {
    const timestamp = id.substring(0, 8);
    const date = new Date( parseInt(timestamp, 16) * 1000)
    return date.toLocaleDateString();
}

export default function BookTable({books} : {books: Book[]}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Ảnh bìa</TableHead>
                    <TableHead>Tên</TableHead>
                    <TableHead>Tác giả</TableHead>
                    <TableHead>Thể loại</TableHead>
                    <TableHead>Ngày thêm</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {books.map((book) => (
                    <TableRow key={book._id}>
                        <TableCell className="flex overflow-hidden">
                            <BookImage
                            book={book}
                            href={`user/book/${book._id}`}
                            style={{width: "150px", height: "250px"}}
                            />
                        </TableCell>
                        <TableCell>
                            <span className="text-l font-semibold">
                                {book.title}
                            </span>
                        </TableCell>
                        <TableCell> <DisplayList list={book.author}/> </TableCell>
                        <TableCell> <DisplayList list={book.genres}/> </TableCell>
                        <TableCell>
                            {ToDateID(book._id)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}