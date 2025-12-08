import { Link } from 'react-router-dom';
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
  TaglineEmphasis,
  BookmarkIcon,
  Headline,
  LinkText,
  LocationBlock,
  LocationLine,
  CardFooter,
  PitchLink,
} from '../components/HomeStyles';

const BookmarkSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

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
                  Building <TaglineEmphasis>Stronger</TaglineEmphasis> Businesses
                </Tagline>
              </NameBlock>
            </ProfileSection>
            <BookmarkIcon aria-label="Bookmark">
              <BookmarkSVG />
            </BookmarkIcon>
          </CardHeader>

          <Headline>Investing in water & energy freedom.</Headline>

          <LinkText as={Link} to="/blog">Check out my other work!</LinkText>

          <LocationBlock>
            <LocationLine>Based in Austin, Texas</LocationLine>
            <LocationLine>United States of America</LocationLine>
            <LocationLine $muted>CDT/CST UTC-6</LocationLine>
          </LocationBlock>

          <CardFooter>
            <PitchLink href="mailto:me@jacquesjean.info">
              Pitch me on your idea!
            </PitchLink>
            <Globe />
          </CardFooter>
        </Card>
      </PageWrapper>
    </>
  );
}
