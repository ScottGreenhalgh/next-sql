import Link from "next/link";
import { connect } from "@/Utils/connect";

export default async function BooksPage() {
  const db = connect();

  const books = (await db.query(`SELECT * FROM books`)).rows;
  console.log(books);
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <p>Books</p>
      {books.map((book) => (
        <div key={books.id}>
          <Link href={`books/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
  );
}
