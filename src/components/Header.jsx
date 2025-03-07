// components/Header.jsx
import { NavLink } from 'react-router-dom';  // Correct import
import CartIcon from './CartIcon';
import { Navbar, Logo, HeaderWrapper, NavContainer, NavLinks } from './styles/Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <Navbar>
        {/* Make the Logo clickable to go home */}
        <Logo as={NavLink} to="/">Urban Nest</Logo>

        <NavContainer>
          <NavLinks>
            {/* Correct usage of NavLink with active state handling */}
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active' : ''}
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
