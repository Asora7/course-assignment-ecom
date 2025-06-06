import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Makes sure layout takes up the full height of the viewport */
`;

const MainContent = styled.main`
  flex: 1; /* Makes sure the main content takes the remaining space */
`;

/**
 * Layout component wraps all pages with a fixed header at the top,
 * a main content area in the middle, and the footer at the bottom.
 *
 * @param {{ children: React.ReactNode }} props
 *   - `children`: The page-specific content to be displayed between header and footer.
 * @returns {JSX.Element} The page layout containing Header, children, and Footer.
 */
function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
