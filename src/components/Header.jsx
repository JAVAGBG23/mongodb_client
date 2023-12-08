import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        BookStore
      </Link>
    </header>
  );
};

export default Header;
