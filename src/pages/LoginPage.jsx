import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const handleLogin = (values) => {
    console.log("Login data:", values);
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;
