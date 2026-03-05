import styled from 'styled-components';
import { Link } from 'react-router-dom';

const fontStack = "'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export const PageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #B8CDD4;

  @media (max-width: 480px) {
    padding: 12px;
    align-items: flex-start;
    padding-top: 32px;
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 28px 28px 24px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  font-family: ${fontStack};

  @media (max-width: 480px) {
    padding: 20px 20px 18px;
    border-radius: 16px;
  }
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
  font-family: ${fontStack};
  font-size: 16px;
  font-weight: 600;
  color: #1A202C;
  margin: 0;
`;

export const Tagline = styled.p`
  font-family: ${fontStack};
  font-size: 14px;
  color: #718096;
  font-weight: 500;
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
  font-family: ${fontStack};
  font-size: 21px;
  font-weight: 600;
  color: #1A202C;
  line-height: 1.35;
  margin-top: 20px;
  margin-bottom: 0;

  @media (max-width: 480px) {
    font-size: 19px;
  }
`;

export const LocationBlock = styled.div`
  margin-top: 16px;
`;

export const LocationLine = styled.p<{ $muted?: boolean; $bold?: boolean }>`
  font-family: ${fontStack};
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
  font-family: ${fontStack};
  font-size: 14px;
  color: #1A202C;
  font-style: italic;
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #E2E8F0;
  margin: 20px 0 16px;
`;

export const VenturesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const VenturesSectionTitle = styled.h3`
  font-family: ${fontStack};
  font-size: 13px;
  font-weight: 600;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 4px;
`;

export const VentureLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: #CBD5E0;
    background-color: #F7FAFC;
  }
`;

export const VentureInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const VentureName = styled.span`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  color: #1A202C;
`;

export const VentureDesc = styled.span`
  font-family: ${fontStack};
  font-size: 13px;
  color: #718096;
  margin-top: 1px;
`;

export const VentureArrow = styled.span`
  font-size: 14px;
  color: #9CA3AF;
  flex-shrink: 0;
  margin-left: 12px;
`;

/* Keeping unused exports removed — popup is no longer used */
