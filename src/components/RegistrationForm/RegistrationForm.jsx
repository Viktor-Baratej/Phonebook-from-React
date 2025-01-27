import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const RegistrationForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={s.register_container}>
            <label>Name</label>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label>Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button className={s.register_btn} type="submit">
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
