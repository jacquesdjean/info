import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LibraryPageWrapper = styled.div`
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

export const LibraryCard = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  margin-top: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: clamp(16px, 5vw, 24px);
    margin-top: 0;
    border-radius: 14px;
  }
`;

export const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const LibraryTitle = styled.h1`
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1A202C;
  margin: 0;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #1A202C;
  opacity: 0.6;
  transition: opacity 0.15s ease;
  min-height: 44px;

  &:hover {
    opacity: 1;
  }
`;

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EntryItem = styled(Link)`
  display: block;
  padding: 16px;
  border-radius: 8px;
  background: #F9FAFB;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: #F3F4F6;
    transform: translateY(-1px);
  }

  &:active {
    background: #EDF2F7;
    transform: scale(0.99);
  }
`;

export const EntryTitle = styled.h2`
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1A202C;
  margin: 0 0 4px 0;
`;

export const EntryMeta = styled.p`
  font-size: 13px;
  color: #718096;
  margin: 0 0 8px 0;
`;

export const EntryExcerpt = styled.p`
  font-size: 14px;
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`;

export const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
