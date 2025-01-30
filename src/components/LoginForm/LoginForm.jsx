import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = async (
    values,
    { resetForm, setSubmitting, setErrors }
  ) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
    } catch (error) {
      setErrors({ email: error || "Invalid login credentials" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className={s.login_container}>
          <Form className={s.login_content}>
            <label>
              Email:
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              Password:
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button className={s.login_btn} type="submit">
              Log In
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
