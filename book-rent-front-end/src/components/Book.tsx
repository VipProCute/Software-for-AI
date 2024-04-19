import Image from "next/image";
import Link from "next/link";
function Book({ data }: { data: any }) {
  // const srcImg = "/{data.imageUrl}";
  return (
    <div className="card card-compact w-40 h-42 bg-base-100 shadow-xl">
      <figure className="p-2">
        <img src={data.imageUrl} alt="Harry potter" className="max-h-48 " />
      </figure>
      <div className="item-center text-center h-15 py-0 ">
        <div>
          <Link
            href={`/user/book/${data.slug}`}
            className="card-title text-sm b-0 justify-center "
          >
            {data.title}
          </Link>
          <p className="text-xs py-3 text-center">{data.author}</p>
        </div>
      </div>
    </div>
  );
}
function BookSide({ data }: { data: any }) {
  return (
    <div className="card card-side w-40 h-48 bg-base-100 shadow-xl grid grid-cols-3 px-1">
      <figure className="px-0 ">
        <img src={data.imageUrl} alt="Book Image" className="max-h-48  " />
      </figure>
      <div className="card-body p-0  self-center col-span-2 items-center">
        <Link href={`/book/${data.slug}`} className="card-title text-xs ">
          {" "}
          {data.title}
        </Link>
        <p className="text-xs">{data.author}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-xs btn-primary">Read</button>
        </div>
      </div>
    </div>
  );
}

export { Book, BookSide };
