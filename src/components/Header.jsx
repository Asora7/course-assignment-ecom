import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import {
  Navbar,
  Logo,
  HeaderWrapper,
  NavContainer,
  NavLinks,
} from './styles/Header.styles';

/**
 * Header component renders the top navigation bar, including the site logo,
 * links to Home and Contact pages, and the CartIcon component.
 *
 * @returns {JSX.Element} The site header containing navigation links and cart icon.
 */
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
