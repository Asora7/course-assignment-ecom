// src/components/styles/Header.styles.js
// src/components/styles/Header.styles.js
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  padding: 1.5rem 2rem;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  margin-bottom: 2rem;
`;

export const Logo = styled(RouterNavLink)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 4vw, 2rem); /* Adjust size dynamically */
  font-weight: bold;
  color: white;
  text-decoration: none;
  white-space: nowrap; /* Prevents breaking into two lines */

  &:hover {
    text-decoration: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap; /* Ensures proper wrapping on small screens */
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* Ensures links wrap if needed */

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
