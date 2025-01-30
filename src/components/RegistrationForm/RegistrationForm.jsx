import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(userData));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <div className={s.register_container}>
          <Form className={s.register_content}>
            <label>
              Name:
              <Field type="text" name="name" />
              {touched.name && errors.name && <div>{errors.name}</div>}
            </label>
            <label>
              Email:
              <Field type="email" name="email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </label>
            <label>
              Password:
              <Field type="password" name="password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </label>
            <button className={s.register_btn} type="submit">
              Register
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
