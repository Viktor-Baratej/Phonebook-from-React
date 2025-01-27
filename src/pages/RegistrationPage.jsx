import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const handleRegister = (values) => {
    console.log("Registration data:", values);
  };

  return <RegistrationForm onSubmit={handleRegister} />;
};

export default RegistrationPage;
