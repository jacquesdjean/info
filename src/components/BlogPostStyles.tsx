import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostPageWrapper = styled.div`
  min-height: 100vh;
  background-color: #9BB5C1;
  padding: 48px 24px;
`;

export const PostContainer = styled.article`
  max-width: 640px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #1A1A1A;
  opacity: 0.6;
  margin-bottom: 32px;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }
`;

export const PostTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.2;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const PostMeta = styled.div`
  font-size: 14px;
  color: #4B5563;
  margin-bottom: 32px;
`;

export const PostContent = styled.div`
  font-size: 17px;
  line-height: 1.75;
  color: #1A1A1A;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 32px 0 16px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 24px 0 12px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    color: #1A1A1A;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      opacity: 0.7;
    }
  }

  blockquote {
    border-left: 3px solid #1A1A1A;
    padding-left: 20px;
    margin: 24px 0;
    font-style: italic;
    color: #4B5563;
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }

  code {
    background: rgba(0, 0, 0, 0.06);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 15px;
  }

  pre {
    background: #1A1A1A;
    color: #F3F4F6;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 24px 0;

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }
`;

export const PostFooter = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
