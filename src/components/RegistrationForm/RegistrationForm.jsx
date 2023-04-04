import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operation';
import {
  FormRegistration,
  FormRegistrationTitle,
  FeedbackFormGroup,
  InputValue,
  Btnwrapper,
  BtnRegister,
  ErrorRegisterMassege,
} from './RegistrationForm.styled.js';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(7).max(20).required(),
  email: yup.string().required(),
  password: yup.string().min(5).max(20).required(),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormRegistration>
        <FormRegistrationTitle>Form Registration</FormRegistrationTitle>
        <FeedbackFormGroup>
          <InputValue type="text" name="name" placeholder="name" />
          <ErrorRegisterMassege name="name" />
        </FeedbackFormGroup>
        <FeedbackFormGroup>
          <InputValue type="email" name="email" placeholder="email" />
          <ErrorRegisterMassege name="email" />
        </FeedbackFormGroup>
        <FeedbackFormGroup>
          <InputValue type="password" name="password" placeholder="password" />
          <ErrorRegisterMassege name="password" />
        </FeedbackFormGroup>
        <Btnwrapper>
          <BtnRegister type="submit">Registration</BtnRegister>
        </Btnwrapper>
      </FormRegistration>
    </Formik>
  );
};

export default RegistrationForm;
