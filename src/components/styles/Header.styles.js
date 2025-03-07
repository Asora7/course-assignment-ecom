// src/components/styles/Header.styles.js
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';  

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: black;
  color: white;
  position: fixed; /* This makes it fixed */
  top: 0; /* Keeps it at the top */
  left: 0; /* Aligns it to the left */
  right: 0; /* Aligns it to the right */
  z-index: 1000; /* Ensures the header is above other content */
`;

export const StyledNavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;

  &.active {
    text-decoration: underline;  // Add underline when active
    // Removed font-size change for active state
  }

  &:hover {
    font-size: 1.1rem;  // Optional slight hover size bump
  }
`;

export const Logo = styled(RouterNavLink)`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin: 0;
  text-decoration: none;  // Removes underline even when active

  &:hover {
    text-decoration: none;  // Optional to make sure hover doesn't add underline
  }

  &.active {
    text-decoration: none;  // Even if it's the active link, no underline
  }
`;


export const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  margin-bottom: 2rem;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .active {
    text-decoration: underline;  // Underline for active link
    // No font-size change
  }
`;

export const CartLink = styled(RouterNavLink)`  // Use Link here
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
