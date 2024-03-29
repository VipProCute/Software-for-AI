import Link from "next/link";
export default function Filter() {
  return (
    <ul className="menu ml-3 bg-main-color bg-opacity-30 w-72 h-full rounded-box">
      <li>
        <Link href="/">
          <h2 className="menu-title text-center text-slate-900 p-0">
            Trang chủ
          </h2>
        </Link>
      </li>
      <li>
        <h2 className="menu-title">Thể loại</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Khoa học - Kỹ thuật
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Giáo khoa - Giáo trình
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Văn học
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Kinh tế
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Kỹ năng sống
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Ngoại ngữ
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Tâm lí - Giới tính
            </label>
          </li>
        </ul>
      </li>
      <li>
        <h2 className="menu-title">Thư viện</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Thư viện A
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Thư viện B
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Thư viện C
            </label>
          </li>
        </ul>
      </li>
      <li>
        <h2 className="menu-title">Nhà xuất bản</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              NXB Trẻ
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              NXB Hội nhà văn
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              NXB Lao động
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              NXB Phụ nữ Việt Nam
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              NXB Tổng hợp TP.HCM
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              NXB Giáo dục Việt Nam
            </label>
          </li>
        </ul>
      </li>
    </ul>
  );
}
