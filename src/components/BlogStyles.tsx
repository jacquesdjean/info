import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WritingPageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  padding: max(48px, env(safe-area-inset-top)) max(24px, env(safe-area-inset-right)) max(48px, env(safe-area-inset-bottom)) max(24px, env(safe-area-inset-left));
  background-color: #B8CDD4;

  @media (max-width: 480px) {
    padding: max(32px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right)) max(32px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left));
  }
`;

export const ArticleList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
`;

export const ArticleLink = styled(Link)`
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2D3748;
  text-align: center;
  line-height: 1.3;
  transition: opacity 0.15s ease, transform 0.15s ease;

  &:hover {
    opacity: 0.7;
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    font-size: clamp(18px, 5vw, 22px);
  }
`;

export const HomeLink = styled(Link)`
  color: #2D3748;
  opacity: 0.6;
  transition: opacity 0.15s ease;
  display: flex;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;

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
