import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #9BB5C1;
`;

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 24px;
  padding: 32px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
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
  font-size: 18px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
`;

export const Tagline = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #22C55E;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const TaglineEmphasis = styled.span`
  font-style: italic;
`;

export const BookmarkIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #9CA3AF;

  &:hover {
    color: #6B7280;
  }
`;

export const Headline = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const LinkText = styled.a`
  display: block;
  font-size: 15px;
  color: #1A1A1A;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LocationBlock = styled.div`
  margin-bottom: 24px;
`;

export const LocationLine = styled.p<{ $muted?: boolean }>`
  font-size: 14px;
  color: ${props => props.$muted ? '#9CA3AF' : '#1A1A1A'};
  margin: 0;
  line-height: 1.6;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PitchLink = styled.a`
  font-size: 14px;
  color: #6B7280;
  font-style: italic;

  &:hover {
    color: #1A1A1A;
  }
`;
