import styled from 'styled-components';
import { accent } from 'constants/theme';
import { device } from '../../styledComps';
import { Link } from 'gatsby';

export const Container = styled.div`
  padding: 4rem 0;
  margin: 4rem 0 0 0;
  // border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #fff')};
`;

export const StyledImg = styled.img`
  width: 40%;
`;
export const H3 = styled.h3`
  @media ${device.desktopL} {
    font-size: 45px;
  }
  @media ${device.desktopM} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  @media ${device.tablet} {
    padding-top: 20px;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 10px;
  margin-left: 10px;
  :hover {
    border-bottom: 2px grey solid;
  }
  @media ${device.mobileL} {
    padding: 5px 0;
  }
`;
