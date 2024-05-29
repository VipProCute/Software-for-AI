export default function Page({ params }: { params: { bookID: string } }) {
  return (
    <div>
        This is book {params.bookID}
    </div>
  )
}