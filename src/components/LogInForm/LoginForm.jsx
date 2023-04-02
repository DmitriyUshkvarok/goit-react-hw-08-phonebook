import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './LoginForm.style.css';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(5).max(20).required(),
});
const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formRegistration}>
        <h2 className={css.formLogInTitle}>Form Log In</h2>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputEmail}
            type="email"
            name="email"
            placeholder="email"
          />
          <ErrorMessage name="email" />
        </div>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputPassword}
            type="password"
            name="password"
            placeholder="password"
          />
          <ErrorMessage name="password" />
        </div>
        <div className={css.btnwrapper}>
          <button className={css.btnRegister} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
