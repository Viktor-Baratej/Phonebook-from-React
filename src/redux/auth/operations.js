import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

// Запит контактів
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error.response);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Login користувача
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// registration користувача
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      console.log("Sending registration data:", userData);
      const response = await axios.post(
        "https://connections-api.goit.global/users/signup",
        userData
      );
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    delete axios.defaults.headers.common.Authorization;
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Оновлення даних користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
