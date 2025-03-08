// src/components/styles/Header.styles.js
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;  /* Stack logo and nav elements vertically on smaller screens */
  justify-content: center;  /* Center all elements */
  align-items: center;  /* Ensure everything is aligned to the center */
  flex-wrap: wrap;
  padding: 1.5rem 2rem;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  /* For larger screens (>= 768px), keep logo on the left and nav on the right */
  @media (min-width: 768px) {
    flex-direction: row;  /* Keep logo and nav horizontally aligned */
    justify-content: space-between;  /* Logo on the left, nav on the right */
  }
`;

export const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  margin-bottom: 2rem;  /* Adjusted margin to add space between header and the search bar */
  
  /* Add some space specifically for smaller screens */
  @media (max-width: 768px) {
    margin-bottom: 5rem;  /* Increase margin for smaller screens */
  }
`;


export const Logo = styled(RouterNavLink)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  margin-bottom: 1rem;  /* Add margin to the bottom to separate the logo from nav items */
  
  /* Center the logo for small screens */
  @media (min-width: 768px) {
    margin-bottom: 0;  /* Remove margin for larger screens */
  }

  &:hover {
    text-decoration: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;  /* Center the navigation links and cart */

  /* For larger screens (>= 768px) */
  @media (min-width: 768px) {
    justify-content: flex-end;  /* Align nav items to the right */
    gap: 1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;  /* Ensure the nav links are centered */

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
