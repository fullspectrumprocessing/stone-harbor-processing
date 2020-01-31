import styled from 'styled-components';
import { device } from '../../styledComps';

export const FormWrapper = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${device.laptopL} {
    width: 100%;
  }
`;

export const Input = styled.input`
  color: #c21b34;
  font-size: 20px;
  padding: 5px;
  border-radius: 20px / 30px;
  margin: 20px 0;
  border: 1px inset #1c317880;
  height: 30px;
  :hover {
    background: #1c317820;
  }
`;

export const TextArea = styled.textarea`
  color: #c21b34;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 20px / 30px;
  margin: 10px 0;
  height: 120px;
  border: 1px inset #1c317880;
  :hover {
    background: #1c317820;
    border: 2px groove #1c3178;
  }
`;

export const Button = styled.button`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  padding: 20px 30px;
  font-size: 20px;
  margin: 20px 0;
  border-radius: 20px / 30px;
  border: 3px outset #1c317880;
  height: 30px;
  width: 50%;
  align-self: center;
  :hover {
    background: green;
  }
`;
