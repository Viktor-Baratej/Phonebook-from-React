import "./index.css";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
