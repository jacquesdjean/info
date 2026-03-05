import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticlePageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #B8CDD4;
  padding: 48px 24px;
  padding: max(48px, env(safe-area-inset-top)) max(24px, env(safe-area-inset-right)) max(48px, env(safe-area-inset-bottom)) max(24px, env(safe-area-inset-left));
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 480px) {
    padding: max(16px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
  }
`;

export const ArticleCard = styled.article`
  background: #FFFFFF;
  border-radius: 16px;
  padding: 40px;
  max-width: 680px;
  width: 100%;
  margin-top: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 480px) {
    padding: clamp(16px, 5vw, 24px);
    margin-top: 0;
    border-radius: 14px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #1A202C;
  opacity: 0.6;
  margin-bottom: 32px;
  transition: opacity 0.15s ease;
  min-height: 44px;

  &:hover {
    opacity: 1;
  }
`;

export const ArticleTitle = styled.h1`
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #1A202C;
  line-height: 1.2;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: clamp(24px, 6vw, 30px);
  }
`;

export const ArticleMeta = styled.div`
  font-size: 14px;
  color: #718096;
  margin-bottom: 32px;
`;

export const ArticleContent = styled.div`
  font-size: 17px;
  line-height: 1.75;
  color: #1A202C;

  h2 {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 24px;
    font-weight: 600;
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
    color: #1A202C;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      opacity: 0.7;
    }
  }

  blockquote {
    border-left: 3px solid #1A202C;
    padding-left: 20px;
    margin: 24px 0;
    font-style: italic;
    color: #718096;
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
    background: #1A202C;
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

export const ArticleFooter = styled.div`
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
