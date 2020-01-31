import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import posed from 'react-pose';
import { Container, WrappedImg } from './header.css';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, data }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <WrappedImg
          fluid={data ? data.homeJson.logo.image.childImageSharp.fluid : {}}
          alt={title}
        />
        {/* <Gallery item={data.homeJson.logo} /> */}
        {/* <Img fluid={logo.image.childImageSharp.fluid} /> */}
        {/* <Title as="h1">A Collections Agency</Title> */}
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const HeaderWithQuery = props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        homeJson {
          logo {
            image {
              childImageSharp {
                fluid(maxHeight: 200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);

export default HeaderWithQuery;

// export default Header;

// export const query = graphql`
//   query NavBarQuery {
//     homeJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//       logo {
//         image {
//           childImageSharp {
//             fluid(maxHeight: 50, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `;
