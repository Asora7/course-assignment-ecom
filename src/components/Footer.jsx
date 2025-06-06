import React from 'react';
import { FooterContainer, FooterText } from './styles/Footer.styles';

/**
 * Footer component renders a simple site footer with © 2025 Urban Nest text.
 *
 * @returns {JSX.Element} The site footer element.
 */
function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2025 Urban Nest</FooterText>
    </FooterContainer>
  );
}

export default Footer;
