import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={s.login_container}>
            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label>Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button className={s.login_btn} type="submit">
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
