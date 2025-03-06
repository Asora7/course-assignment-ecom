// src/components/styles/Header.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link here

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: black;
  color: white;
`;

export const Logo = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin: 0;
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
`;

export const CartLink = styled(Link)`  // Use Link here
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

