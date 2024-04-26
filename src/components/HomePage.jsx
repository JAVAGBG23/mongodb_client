import { useEffect, useState } from "react";
import BookContainer from "./BookContainer";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
    const fetchBooks = async () => {
    const response = await fetch("http://localhost:8000/api/books/all");
    const data = await response.json();
    console.log(data);
    setBooks(data);
  }
  }, []);

  

  return (
    <div>
      {books?.map((book) => {
        return (
          <div key={book._id} className="landing-container">
            <BookContainer
              id={book._id}
              title={book.title}
              author={book.author.name}
              coAuthor={book.coAuthor?.name}
              bookCoverUrl={book.bookCoverUrl}
              priceExVat={book.priceExVat}
              link={`/${book._id}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
