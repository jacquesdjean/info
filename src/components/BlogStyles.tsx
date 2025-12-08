import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  background-color: #9BB5C1;
`;

export const PostList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
`;

export const PostLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #1A1A1A;
  text-align: center;
  line-height: 1.3;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const HomeLink = styled(Link)`
  color: #1A1A1A;
  opacity: 0.6;
  transition: opacity 0.15s ease;
  display: flex;

  &:hover {
    opacity: 1;
  }
`;

export const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
