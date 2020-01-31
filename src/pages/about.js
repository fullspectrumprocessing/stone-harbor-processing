import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'components/head';

const H1 = styled.h1`
  font-size: 50px;
  display: flex;
  font-weight: 600;
  text-shadow: 1px 1px 3px grey;
`;
const H2 = styled.h2`
  font-size: 30px;
  display: inherit;
  margin: 10px 0;
  font-weight: 500;
`;
const P = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 0 40px;
  word-spacing: 5px;
  letter-spacing: 1px;
  line-height: 25px;
`;
const StyledTitle = styled.div`
  border-bottom: 2px grey solid;
  padding: 10px 50px;
  margin: 0 50px 0 4rem;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
`;
const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <StyledTitle>
      <H1>About Us</H1>
    </StyledTitle>
    <StyledDiv>
      <H2> Who We Are</H2>
      <P>{data.aboutJson.content1.childMarkdownRemark.rawMarkdownBody}</P>
    </StyledDiv>
    <StyledDiv>
      <H2> What We Do</H2>
      <P>{data.aboutJson.content2.childMarkdownRemark.rawMarkdownBody}</P>
    </StyledDiv>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content1 {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      content2 {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
