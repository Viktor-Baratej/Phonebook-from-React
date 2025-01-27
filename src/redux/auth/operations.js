import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлення базового URL для Axios
axios.defaults.baseURL = "https://connections-api.goit.global";

// Операція для реєстрації нового користувача
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      // Збереження токену
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для входу
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      // Збереження токену
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для виходу
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    // Видалення токену
    delete axios.defaults.headers.common.Authorization;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Операція для оновлення користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
