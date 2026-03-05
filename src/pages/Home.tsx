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
  CardFooter,
  PitchLink,
  Divider,
  VenturesSection,
  VenturesSectionTitle,
  VentureLink,
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
  { name: 'MilkRoute.ai', url: 'https://milkroute.ai', desc: 'Channel sales methodology for B2B founders' },
  { name: 'BlueSignal', url: 'https://bluesignal.xyz', desc: 'Water quality monitoring hardware' },
  { name: 'WaterQuality.Trading', url: 'https://waterquality.trading', desc: 'Nutrient credit marketplace' },
];

export function Home() {
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
                <Tagline>
                  Building Stronger Businesses
                </Tagline>
              </NameBlock>
            </ProfileSection>
            <BookmarkIcon to="/library" aria-label="Library">
              <BookmarkSVG />
            </BookmarkIcon>
          </CardHeader>

          <Headline>Building systems in energy, water, and sales intelligence.</Headline>

          <LocationBlock>
            <LocationLine $bold>Based in Austin, Texas</LocationLine>
            <LocationLine>United States of America 🇺🇸</LocationLine>
            <LocationLine $muted>CDT/DST UTC-5</LocationLine>
          </LocationBlock>

          <CardFooter>
            <PitchLink href="https://cal.com/jacquesjean/phone" target="_blank" rel="noopener noreferrer">
              Pitch me on your idea!
            </PitchLink>
            <Globe />
          </CardFooter>

          <Divider />

          <VenturesSection>
            <VenturesSectionTitle>Current Ventures</VenturesSectionTitle>
            {ventures.map((v) => (
              <VentureLink key={v.name} href={v.url} target="_blank" rel="noopener noreferrer">
                <VentureInfo>
                  <VentureName>{v.name}</VentureName>
                  <VentureDesc>{v.desc}</VentureDesc>
                </VentureInfo>
                <VentureArrow>&#8599;</VentureArrow>
              </VentureLink>
            ))}
          </VenturesSection>
        </Card>
      </PageWrapper>
    </>
  );
}
