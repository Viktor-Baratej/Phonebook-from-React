// import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Реєстрація
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(register.rejected, (state, action) => {
//         console.error("Registration failed:", action.payload);
//       })
//       // Логін
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.rejected, (state, action) => {
//         console.error("Login failed:", action.payload);
//       })
//       // Логаут
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = null;
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(logOut.rejected, (state, action) => {
//         console.error("Logout failed:", action.payload);
//       })
//       // Оновлення користувача
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser } from "./operations";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
