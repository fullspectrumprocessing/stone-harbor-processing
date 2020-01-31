import styled from 'styled-components';
import Img from 'gatsby-image';
import React from 'react';
import { device } from '../../styledComps';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem 4rem 4rem;
  z-index: 200;
  a {
    // color: #757575;
    color: black;
    font-size: 18px;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const StyledImg = styled(Img)`
  display: flex;
  z-index: 200;
`;

const Wrapper = styled.figure`
  display: block;
  justify-content: center;
  width: 200px;
  align-items: center;
  z-index: 200;
`;

export const WrappedImg = props => (
  <Wrapper>
    <StyledImg {...props} />
  </Wrapper>
);
