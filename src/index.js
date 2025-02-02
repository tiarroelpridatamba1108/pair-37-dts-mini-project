import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NoPage from "./container/NoPage";
import RegisterPage from "./container/RegisterPage";
import LoginPage from "./container/LoginPage";
import MovieDetailPage from "./container/MovieDetailPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPasswordPage from "./container/ForgotPasswordPage";
import LogoutPage from "./container/LogoutPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/movies/:plan' element={<MovieDetailPage />} />
        </Route>
        <Route
          path='login'
          element={
            <ProtectedRoute loginOnly={false}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='logout'
          element={
            <ProtectedRoute loginOnly={false}>
              <LogoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='register'
          element={
            <ProtectedRoute loginOnly={false}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='forgot-password'
          element={
            <ProtectedRoute loginOnly={false}>
              <ForgotPasswordPage />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
