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
  padding: max(24px, env(safe-area-inset-top)) max(24px, env(safe-area-inset-right)) max(24px, env(safe-area-inset-bottom)) max(24px, env(safe-area-inset-left));
  background-color: #B8CDD4;

  @media (max-width: 480px) {
    padding: max(16px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
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
    padding: clamp(16px, 5vw, 24px) clamp(16px, 5vw, 24px) clamp(14px, 4vw, 20px);
    border-radius: 18px;
    max-width: 100%;
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

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
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
  min-width: 44px;
  min-height: 44px;
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
    font-size: clamp(17px, 4.5vw, 20px);
    margin-top: 16px;
  }
`;

export const LocationBlock = styled.div`
  margin-top: 16px;

  @media (max-width: 480px) {
    margin-top: 12px;
  }
`;

export const LocationLine = styled.p<{ $muted?: boolean; $bold?: boolean }>`
  font-family: ${fontStack};
  font-size: 14px;
  color: ${props => props.$muted ? '#718096' : '#1A202C'};
  font-weight: ${props => props.$bold ? '600' : '400'};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const GlobeRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;

  @media (max-width: 480px) {
    margin-top: 8px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 16px;
  }
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
  min-height: 48px;

  &:hover {
    border-color: #CBD5E0;
    background-color: #EDF2F7;
  }

  &:active {
    background-color: #E2E8F0;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    border-radius: 10px;
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
    padding: 0;
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
  -webkit-overflow-scrolling: touch;
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
    padding-bottom: max(20px, env(safe-area-inset-bottom));
    max-height: 92vh;
    max-height: 92dvh;
    max-width: 100%;
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
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
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

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`;

export const VentureHeroImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  background: #F1F5F9;

  @media (max-width: 480px) {
    height: clamp(100px, 28vw, 130px);
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
