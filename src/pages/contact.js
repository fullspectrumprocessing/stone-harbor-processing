import React from 'react';
import Layout from 'components/layout';
import * as S from '../styledComps';
import ContactForm from 'components/contact';

const Contact = () => {
  return (
    <Layout>
      <S.StyledTitle>
        <S.H1>Contact Us</S.H1>
      </S.StyledTitle>

      <S.StyledDiv>
        <S.ContactWrap>
          <S.H2> Phone:</S.H2>
          <S.H3>(215) 268-3594</S.H3>
        </S.ContactWrap>
        <S.ContactWrap>
          <S.H2>Address:</S.H2>
          <S.H3>803 S 4th Street 1st Floor</S.H3>
          {' '}
          <S.H3> Philadelphia, PA 19147 </S.H3>
        </S.ContactWrap>
      </S.StyledDiv>
      <S.StyledDiv>
        <ContactForm />
      </S.StyledDiv>
    </Layout>
  );
};

export default Contact;
