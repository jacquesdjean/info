import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #B8CDD4;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px 28px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NameBlock = styled.div``;

export const Name = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #1A202C;
  margin: 0;
`;

export const Tagline = styled.p`
  font-size: 14px;
  color: #718096;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #48BB78;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const BookmarkIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: #9CA3AF;
  transition: color 0.15s ease;

  &:hover {
    color: #6B7280;
  }
`;

export const Headline = styled.h2`
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 21px;
  font-weight: 600;
  color: #1A202C;
  line-height: 1.3;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const LinkText = styled.a`
  display: block;
  font-size: 15px;
  color: #1A202C;
  margin-top: 12px;
  margin-bottom: 0;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const LocationBlock = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const LocationLine = styled.p<{ $muted?: boolean; $bold?: boolean }>`
  font-size: 14px;
  color: ${props => props.$muted ? '#718096' : '#1A202C'};
  font-weight: ${props => props.$bold ? '600' : '400'};
  margin: 0;
  line-height: 1.6;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
`;

export const PitchLink = styled.a`
  font-size: 14px;
  color: #1A202C;
  font-style: italic;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;
