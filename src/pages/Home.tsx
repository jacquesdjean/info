import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Globe } from '../components/Globe';
import {
  PageWrapper,
  Card,
  CardHeader,
  ProfileSection,
  Avatar,
  NameBlock,
  Name,
  Tagline,
  BookmarkIcon,
  Headline,
  LocationBlock,
  LocationLine,
  GlobeRow,
  BottomRow,
  BottomButton,
  BottomButtonLabel,
  BottomButtonArrow,
  PopupOverlay,
  PopupCard,
  PopupHeader,
  PopupTitle,
  PopupClose,
  VentureCard,
  VentureHeroImage,
  VentureCardBody,
  VentureInfo,
  VentureName,
  VentureDesc,
  VentureArrow,
} from '../components/HomeStyles';

const BookmarkSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const ventures = [
  {
    name: 'MilkRoute.ai',
    url: 'https://milkroute.ai',
    desc: 'Channel sales for founders',
    hero: '/ventures/milkroute-og.png',
  },
  {
    name: 'BlueSignal',
    url: 'https://bluesignal.xyz',
    desc: 'Water quality monitoring hardware',
    hero: '/ventures/bluesignal-og.png',
  },
  {
    name: 'WaterQuality.Trading',
    url: 'https://waterquality.trading',
    desc: 'Water quality credit marketplace',
    hero: '/ventures/waterquality-og.png',
  },
];

export function Home() {
  const [showVentures, setShowVentures] = useState(false);

  return (
    <>
      <SEO />
      <PageWrapper>
        <Card>
          <CardHeader>
            <ProfileSection>
              <Avatar
                src="https://framerusercontent.com/images/JApsSortn8lDy0Tsl66p6wcrM8.jpeg"
                alt="Jacques Jean"
              />
              <NameBlock>
                <Name>Jacques Jean</Name>
                <Tagline>Building Stronger Businesses</Tagline>
              </NameBlock>
            </ProfileSection>
            <BookmarkIcon to="/library" aria-label="Library">
              <BookmarkSVG />
            </BookmarkIcon>
          </CardHeader>

          <Headline>Building systems in energy, water, and sales enablement.</Headline>

          <LocationBlock>
            <LocationLine $bold>Based in Austin, Texas</LocationLine>
            <LocationLine>United States of America</LocationLine>
            <LocationLine $muted>CDT/DST UTC-5</LocationLine>
          </LocationBlock>

          <GlobeRow>
            <Globe />
          </GlobeRow>

          <BottomRow>
            <BottomButton as="a" href="https://cal.com/jacquesjean/phone" target="_blank" rel="noopener noreferrer">
              <BottomButtonLabel>Pitch me your idea!</BottomButtonLabel>
              <BottomButtonArrow>&#8599;</BottomButtonArrow>
            </BottomButton>
            <BottomButton onClick={() => setShowVentures(true)}>
              <BottomButtonLabel>Current Ventures</BottomButtonLabel>
              <BottomButtonArrow>&#8599;</BottomButtonArrow>
            </BottomButton>
          </BottomRow>
        </Card>
      </PageWrapper>

      {showVentures && (
        <PopupOverlay onClick={(e) => e.target === e.currentTarget && setShowVentures(false)}>
          <PopupCard>
            <PopupHeader>
              <PopupTitle>Current Ventures</PopupTitle>
              <PopupClose onClick={() => setShowVentures(false)}>&times;</PopupClose>
            </PopupHeader>
            {ventures.map((v) => (
              <VentureCard key={v.name} href={v.url} target="_blank" rel="noopener noreferrer">
                <VentureHeroImage src={v.hero} alt={`${v.name} hero`} loading="lazy" />
                <VentureCardBody>
                  <VentureInfo>
                    <VentureName>{v.name}</VentureName>
                    <VentureDesc>{v.desc}</VentureDesc>
                  </VentureInfo>
                  <VentureArrow>&#8599;</VentureArrow>
                </VentureCardBody>
              </VentureCard>
            ))}
          </PopupCard>
        </PopupOverlay>
      )}
    </>
  );
}
