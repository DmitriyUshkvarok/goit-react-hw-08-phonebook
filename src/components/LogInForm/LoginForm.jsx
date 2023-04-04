import { Formik } from 'formik';
import authOperations from 'redux/auth/auth-operation';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormRegistrationLogin,
  FormRegistrationTitleLogin,
  FeedbackFormGroupLogin,
  InputValueLogin,
  BtnwrapperLogin,
  BtnRegisterLogin,
  ErrorRegisterMassegeLogin,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import authSelector from 'redux/auth/auth-selector';
import { useEffect } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(5).max(20).required(),
});
const LoginForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector.getName);

  useEffect(() => {
    if (userName) {
      toast.success(`Hi ${userName}`);
    }
  }, [userName]);

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(authOperations.logIn(values));
    // toast.success(`Hi ${userName}`);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormRegistrationLogin>
        <FormRegistrationTitleLogin>Form Log In</FormRegistrationTitleLogin>
        <FeedbackFormGroupLogin>
          <InputValueLogin type="email" name="email" placeholder="email" />
          <ErrorRegisterMassegeLogin name="email" />
        </FeedbackFormGroupLogin>
        <FeedbackFormGroupLogin>
          <InputValueLogin
            type="password"
            name="password"
            placeholder="password"
          />
          <ErrorRegisterMassegeLogin name="password" />
        </FeedbackFormGroupLogin>
        <BtnwrapperLogin>
          <BtnRegisterLogin type="submit">Log In</BtnRegisterLogin>
        </BtnwrapperLogin>
      </FormRegistrationLogin>
    </Formik>
  );
};

export default LoginForm;
