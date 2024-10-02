import { connect } from "@/Utils/connect";
import Link from "next/link";

export default async function BookPage({ params }) {
  const db = connect();

  const book = (
    await db.query(`SELECT * FROM books WHERE id = $1`, [params.id])
  ).rows[0];

  let data = new Date(book.release);
  let formattedData = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`;

  return (
    <div>
      <nav>
        <Link href="/books">Books</Link>
        <Link href="/">Home</Link>
      </nav>
      <p>Book {params.id}</p>
      <p>{`Title: ${book.title}`}</p>
      <p>{`Author: ${book.author}`}</p>
      <p>{`Release data: ${formattedData}`}</p>
      <br />
      <p>{`Description: ${book.description}`}</p>
      <p>{`Quote: ${book.quote}`}</p>
      {/* <Image
        src={book.img_url}
        alt={`Image of ${book.title}`}
        height={200}
        width={100}
      /> */}
    </div>
  );
}
