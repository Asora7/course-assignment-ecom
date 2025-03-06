// components/Header.jsx
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"; // Import CartIcon
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <header>
      <Navbar>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <CartIcon />
      </Navbar>
    </header>
  );
}

export default Header;
