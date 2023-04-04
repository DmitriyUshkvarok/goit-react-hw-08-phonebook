import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegistrationLogin = styled(Form)`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  gap: 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  margin-top: 150px;
`;

export const FormRegistrationTitleLogin = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);
`;

export const FeedbackFormGroupLogin = styled.div`
  width: 100%;
`;

export const InputValueLogin = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  outline: none;

  &::placeholder {
    opacity: 0.3;
    color: var(--color);
  }
`;

export const BtnwrapperLogin = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const BtnRegisterLogin = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  cursor: pointer;
`;

export const ErrorRegisterMassegeLogin = styled(ErrorMessage)`
  color: red;
`;
