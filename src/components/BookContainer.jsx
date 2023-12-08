import { Link } from "react-router-dom";

const BookContainer = ({
  link,
  bookCoverUrl,
  title,
  author,
  coAuthor,
  priceExVat,
}) => {
  return (
    <div className="book-container">
      <img src={`${bookCoverUrl}`} />
      <div className="book-info">
        <span>{title}</span>
        <span>
          by {author} {coAuthor ? `and ${coAuthor}` : ""}
        </span>
        <span>
          ${priceExVat} <span>excluding VAT</span>
        </span>
        <Link to={link}>
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default BookContainer;
