import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import {
  Navbar,
  Logo,
  HeaderWrapper,
  NavContainer,
  NavLinks,
} from './styles/Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <Navbar>
        <Logo as={NavLink} to="/">
          Urban Nest
        </Logo>

        <NavContainer>
          <NavLinks>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </NavLinks>
          <CartIcon />
        </NavContainer>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;
