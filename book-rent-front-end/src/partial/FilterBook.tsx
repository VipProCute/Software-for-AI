export default function FilterBook() {
  return (
    <div className="flex w-full">
      <div className="flex justify-between gap-2 px-2 py-2">
        <span className=" whitespace-nowrap font-semibold text-sm  mb-4">
          Thể loại
        </span>
        <select className="select select-info select-xs ">
          <option>Tất cả</option>
          <option>Horror</option>
          <option>Comedy</option>
        </select>
      </div>

      <div className="flex justify-between gap-2 px-4 py-2">
        <span className=" font-semibold text-sm  mb-4">NXB</span>
        <select className="select select-info select-xs ">
          <option>Tất cả</option>
          <option>Horror</option>
          <option>Comedy</option>
        </select>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2">
        <span className=" whitespace-nowrap font-semibold text-sm mb-4">
          Ngôn ngữ
        </span>
        <select className="select select-info select-xs ">
          <option>Tất cả</option>
          <option>Horror</option>
          <option>Comedy</option>
        </select>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2">
        <span className=" whitespace-nowrap font-semibold text-sm  mb-4">
          Thư viện
        </span>
        <select className="select select-info select-xs ">
          <option>Tất cả</option>
          <option>Horror</option>
          <option>Comedy</option>
        </select>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2">
        <span className=" whitespace-nowrap font-semibold text-sm  mb-4">
          Sắp xếp
        </span>
        <select className="select select-info select-xs ">
          <option>Tất cả</option>
          <option>Horror</option>
          <option>Comedy</option>
        </select>
      </div>
    </div>
  );
}
