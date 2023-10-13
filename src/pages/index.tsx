import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthRoutes } from "@pages/authorized";
import { Dashboard } from "@auth/dashboard";
import { Event } from "@auth/event";
import { Faq } from "@auth/faq";
import { Login } from "@pages/login";
import { Session } from "@pages/authorized/session";
import { PrivateDashboard } from "@auth/private-dashboard";
import { Profile } from "@auth/profile";
import { Scheduler } from "@auth/scheduler";

import { light } from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="private-dashboard">
              <Route path=":id" element={<PrivateDashboard />} />
            </Route>
            <Route path="event" element={<Event />} />
            <Route path="session" element={<Session />} />
            <Route path="scheduler" element={<Scheduler />} />
            <Route path="profile" element={<Profile />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
