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

export const VenturesTrigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding: 14px 18px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2ecf3 100%);
  border: 1px solid #d0dbe6;
  border-radius: 14px;
  cursor: pointer;
  font-family: ${fontStack};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #b0c4d8;
    background: linear-gradient(135deg, #e8eff5 0%, #d6e4ef 100%);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }
`;

export const VenturesTriggerLabel = styled.span`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
`;

export const VenturesTriggerArrow = styled.span<{ $open?: boolean }>`
  font-size: 18px;
  color: #718096;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${props => props.$open ? '0deg' : '180deg'});
  line-height: 1;
`;

export const VenturesPanel = styled.div<{ $open?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  overflow: hidden;
  max-height: ${props => props.$open ? '600px' : '0'};
  opacity: ${props => props.$open ? 1 : 0};
  margin-top: ${props => props.$open ? '14px' : '0'};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease;
`;

export const VentureCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  transition: background 0.25s ease;
`;

export const VentureCard = styled.a<{ $hero: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  background-image: url(${props => props.$hero});
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  &:hover ${VentureCardOverlay} {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.15) 100%
    );
  }

  @media (max-width: 480px) {
    height: 115px;
  }
`;

export const VentureTag = styled.span`
  position: relative;
  z-index: 1;
  align-self: flex-start;
  margin: 12px 0 0 12px;
  padding: 3px 10px;
  font-family: ${fontStack};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 6px;
`;

export const VentureCardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 14px 12px;
`;

export const VentureName = styled.span`
  font-family: ${fontStack};
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  display: block;
`;

export const VentureDesc = styled.span`
  font-family: ${fontStack};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 2px;
  display: block;
`;
