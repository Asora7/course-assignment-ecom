import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Makes sure layout takes up the full height of the viewport */
`;

const MainContent = styled.main`
  flex: 1; /* Makes sure the main content takes the remaining space */
`;

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
