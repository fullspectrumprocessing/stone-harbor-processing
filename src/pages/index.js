import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
// import Box from 'components/box';
// import Title from 'components/title';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Head from 'components/head';
import { graphql, Link } from 'gatsby';

const StyledImg = styled(Img)`
  // display: flex;
  // align-self: center;
  // height: 100%;
  height: 920px;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;
  opacity: 0.2;
  height: 860px;
  width: 100%;
  top: 0;
  left: 0;
`;
const HeroTextDiv = styled.div`
  z-index: 200;
  position: absolute;
  top: 18%;
  // padding: 100px;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 60px;
  max-width: 800px;
  margin: 0 auto;
  padding: 100px;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
const Wrapper = styled.figure`
  display: block;
  // position: relative;
  justify-content: center;
  // margin: 5% 10%;
  margin: 0px;
  margin-top: -240px;
  align-items: center;
  z-index: -100;
`;
const Div = styled.div`
  z-index: 200;
  // position: absolute;
  // top: 90%;
  padding: 100px;
  background: black;
  min-height: 350px;
  margin: 0 auto;
  // opacity: .87;
`;
const P = styled.p`
  // z-index: 200;
  // position: absolute;
  // top: 50%;
  // padding: 100px;
  color: white;
  font-size: 25px;
  // padding: 50px;
  max-width: 700px;
  line-heigh: 1.5;
  margin: 0 auto;
`;
const Button = styled.button`
  background-color: #e5c277;
  font-size: 25px;
  color: black;
  padding: 20px;
  max-width: 700px;
  line-heigh: 1.5;
  // position-relative;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  border: none;
  border-radius: 2px;
  &:hover {
    background: black;
    color: #e5c277;
    border: 2px solid #e5c277;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
// test
const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />

    <Wrapper>
      <StyledImg fluid={data.homeJson.gallery[2].image.childImageSharp.fluid} />
      <Overlay></Overlay>
      <HeroTextDiv>
        <HeaderText>
          Versatile Point-Of‑Sale Systems with flexible options and pricing to
          meet all of your business needs.{' '}
        </HeaderText>
      </HeroTextDiv>
      <Div>
        <P size="large">
          Our POS systems allow you to track inventory and sales, manage
          employees, grow customer relationships, and analyze data. One of our
          dedicated sales reps will provide you with a system that best fits
          your company’s needs.
          {/* Please, complete the contact
          section below for one of our reps to contact you directly. */}
          {/* {data.homeJson.content.childMarkdownRemark.rawMarkdownBody} */}
        </P>
        <StyledLink to="/contact">
          <Button>Contact a Sales Representative</Button>
        </StyledLink>
      </Div>
    </Wrapper>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      logo {
        image {
          childImageSharp {
            fluid(maxHeight: 50, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
