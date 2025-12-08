import styled from 'styled-components';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Portrait = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    margin-bottom: 1.5rem;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: #4a4a4a;
  margin-bottom: 0.25rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SubTagline = styled.p`
  font-size: 1.125rem;
  color: #6a6a6a;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const LocationInfo = styled.div`
  margin-bottom: 2rem;
  color: #6a6a6a;
  font-size: 0.95rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const LocationLine = styled.p`
  margin: 0;
`;

const Flag = styled.span`
  margin-left: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  background-color: #0d7377;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #14919b;
    color: #ffffff;
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  background-color: transparent;
  color: #1a1a1a;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #0d7377;
    color: #0d7377;
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Arrow = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.2s ease;

  ${SecondaryButton}:hover & {
    transform: translateX(3px);
  }
`;

export function Hero() {
  return (
    <HeroWrapper>
      <Portrait
        src="https://framerusercontent.com/images/JApsSortn8lDy0Tsl66p6wcrM8.jpeg"
        alt="Portrait of Jacques Jean"
      />
      <Name>Jacques Jean</Name>
      <Tagline>Building Stronger Businesses</Tagline>
      <SubTagline>Investing in water & energy freedom.</SubTagline>

      <LocationInfo>
        <LocationLine>Based in Austin, Texas</LocationLine>
        <LocationLine>
          United States of America<Flag>🇺🇸</Flag>
        </LocationLine>
        <LocationLine>CDT/CST UTC-6</LocationLine>
      </LocationInfo>

      <ButtonGroup>
        <PrimaryButton href="mailto:me@jacquesjean.info">
          Email Me
        </PrimaryButton>
        <SecondaryButton href="/blog">
          View My Work<Arrow>&rarr;</Arrow>
        </SecondaryButton>
      </ButtonGroup>
    </HeroWrapper>
  );
}
