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

export const GlobeRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const BottomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 14px 16px;
  background: #F7FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  cursor: pointer;
  font-family: ${fontStack};
  text-decoration: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: #CBD5E0;
    background-color: #EDF2F7;
  }
`;

export const BottomButtonLabel = styled.span`
  font-family: ${fontStack};
  font-size: 12px;
  font-weight: 600;
  color: #1A202C;
`;

export const BottomButtonArrow = styled.span`
  font-size: 16px;
  color: #718096;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  animation: fadeIn 0.15s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 480px) {
    padding: 12px;
    align-items: flex-end;
  }
`;

export const PopupCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 24px;
  max-width: 440px;
  width: 100%;
  max-height: 85vh;
  max-height: 85dvh;
  overflow-y: auto;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: ${fontStack};
  animation: slideUp 0.2s ease;

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    border-radius: 20px 20px 0 0;
    padding: 20px;
    max-height: 90vh;
    max-height: 90dvh;
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const PopupTitle = styled.h3`
  font-family: ${fontStack};
  font-size: 16px;
  font-weight: 600;
  color: #1A202C;
  margin: 0;
`;

export const PopupClose = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  color: #9CA3AF;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  transition: color 0.15s ease;

  &:hover {
    color: #4A5568;
  }
`;

export const VentureCard = styled.a`
  display: block;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #CBD5E0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }
`;

export const VentureHeroImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  background: #F1F5F9;

  @media (max-width: 480px) {
    height: 120px;
  }
`;

export const VentureCardBody = styled.div`
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VentureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const VentureName = styled.span`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  color: #1A202C;
`;

export const VentureDesc = styled.span`
  font-family: ${fontStack};
  font-size: 12px;
  color: #718096;
`;

export const VentureArrow = styled.span`
  font-size: 16px;
  color: #9CA3AF;
  flex-shrink: 0;
  margin-left: 12px;
`;
