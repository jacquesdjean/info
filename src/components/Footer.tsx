import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid #eaeaea;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #6a6a6a;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #6a6a6a;

  &:hover {
    color: #0d7377;
  }
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterText>
        &copy; {currentYear} Jacques Jean. All rights reserved.
      </FooterText>
      <FooterText style={{ marginTop: '0.5rem' }}>
        <FooterLink href="mailto:me@jacquesjean.info">
          me@jacquesjean.info
        </FooterLink>
      </FooterText>
    </FooterWrapper>
  );
}
