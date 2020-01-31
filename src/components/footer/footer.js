import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import IOExample from '../../components/io-example';
import styled from 'styled-components';

const StyledDiv = styled.div`
  justify-self: end;
`;
const Footer = () => {
  return (
    <StyledDiv>
      <div style={{ background: 'magenta' }} />
      <IOExample />
    </StyledDiv>
  );
};

export default Footer;
