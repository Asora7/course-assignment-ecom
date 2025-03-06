// components/Header.jsx
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { Navbar, Logo, HeaderWrapper, NavContainer, NavLinks } from "./styles/Header.styles";

function Header() {
  return (
    <HeaderWrapper>
      <Navbar>
        <Logo>Urban Nest</Logo>
        <NavContainer>
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </NavLinks>
          <CartIcon />
        </NavContainer>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;
