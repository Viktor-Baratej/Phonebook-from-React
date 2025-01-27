import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form className={s.login_container}>
          <label>
            Email:
            <Field type="email" name="email" />
          </label>
          <label>
            Password:
            <Field type="password" name="password" />
          </label>
          <button className={s.login_btn} type="submit">
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
