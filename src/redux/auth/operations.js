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

// Реєстрація користувача
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      console.log("Sending registration data:", userData);
      const response = await axios.post(
        "https://connections-api.goit.global/users/signup",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error.response);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Registration failed"
      );
    }
  }
);

export const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(`/users/check-email?email=${email}`);
    return response.data.exists;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

// Логін
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      console.log("Sending login data:", credentials);
      const response = await axios.post(
        "https://connections-api.goit.global/users/login",
        credentials
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Логаут
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    delete axios.defaults.headers.common.Authorization;
    return null;
  } catch (error) {
    console.error("Error during logout:", error.response);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Оновлення даних користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        console.warn("No token available");
        return thunkAPI.rejectWithValue("No token available");
      }

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const response = await axios.get("/users/current", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error during refreshing user:", error.response);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
