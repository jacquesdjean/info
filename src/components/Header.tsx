import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;

  &:hover {
    color: #0d7377;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #4a4a4a;

  &:hover {
    color: #0d7377;
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Logo to="/">Jacques Jean</Logo>
      <Nav>
        <NavLink to="/blog">Writing</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}
