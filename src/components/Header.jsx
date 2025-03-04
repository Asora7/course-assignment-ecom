// components/Header.jsx
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"; // Import CartIcon

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <CartIcon /> {/* Display Cart Icon here */}
      </nav>
    </header>
  );
}

export default Header;
