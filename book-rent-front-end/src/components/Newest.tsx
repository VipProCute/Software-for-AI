import Book from "./Book";

export default function Newest() {
  return (
    <div className="container mx-auto w-full item-center bg-main-color bg-opacity-30">
      <h1 className="text-8 font-bold px-5 py-3">Sách mới cập nhật</h1>
      <div className="flex flex-wrap w-full justify-start gap-4 text-center flex-grow-0 flex-shrink-0">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}
