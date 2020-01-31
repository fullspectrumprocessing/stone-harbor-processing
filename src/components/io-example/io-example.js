import React from 'react';
import IO from 'components/io';
import {
  Container,
  StyledImg,
  H3,
  StyledLink,
  FooterNav,
} from './io-example.css';
import { P } from '../../styledComps';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <H3>We Accept</H3>
        <OutboundLink href="https://www.merchantequip.com/information-center/credit-card-logos/">
          <StyledImg
            src="https://www.merchantequip.com/image/?logos=v|m|a|d|ec&height=64"
            alt="Merchant Equipment Store Credit Card Logos"
          />
        </OutboundLink>
        <P style={{ color: '#C21B34', fontWeight: '800' }}>
          Site Built by{' '}
          <abbr title="Full Spectrum Processing">
            <OutboundLink
              style={{ color: '#C21B34', fontWeight: '800' }}
              href="https://fullspectrumprocessing.com"
            >
              FSP
            </OutboundLink>
          </abbr>
        </P>
        <FooterNav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>{' '}
              <StyledLink to="/terms">Terms and Conditions</StyledLink>
              <StyledLink to="/policy">Our Policy</StyledLink>
            </li>
          </ul>
        </FooterNav>
      </Container>
    )}
  </IO>
);

export default IOExample;
