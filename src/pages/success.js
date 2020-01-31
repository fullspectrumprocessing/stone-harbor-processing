import React from 'react';
import * as S from '../styledComps';
import Layout from 'components/layout';
const Success = () => {
  return (
    <>
      <Layout>
        <S.StyledTitle>
          <S.H1>Success Page</S.H1>
        </S.StyledTitle>
        <S.StyledDiv>
          <div style={{ height: '400px', padding: '50px' }}>
            <S.H2>Thank you for submitting your message.</S.H2>
            <S.H2>We appreciate you reaching out. </S.H2>
            <S.H2>
              A representative from our team will contact you shortly.
            </S.H2>
            <S.H2>Have a wonderful day!</S.H2>
          </div>
        </S.StyledDiv>
      </Layout>
    </>
  );
};

export default Success;
