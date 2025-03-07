// components/Header.jsx
import { NavLink } from 'react-router-dom';  // Import NavLink instead of Link
import CartIcon from './CartIcon';
import { Navbar, Logo, HeaderWrapper, NavContainer, NavLinks } from './styles/Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <Navbar>
        <Logo>Urban Nest</Logo>
        <NavContainer>
          <NavLinks>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </NavLinks>
          <CartIcon />
        </NavContainer>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;
