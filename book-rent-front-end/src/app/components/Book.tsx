export default function Book() {
  return (
    <div className="card card-compact w-40 h-45 bg-base-100 shadow-xl">
      <figure className="p-2">
        <img
          src="https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_UF894,1000_QL80_.jpg"
          alt="Harry potter"
        />
      </figure>
      <div className="item-center text-center h-15 py-0">
        <div>
          <h2 className="card-title text-sm b-0">
            Harry potter và chiếc cốc lửa
          </h2>
          <p className="text-xs py-3">Rowling</p>
        </div>
      </div>
    </div>
  );
}
