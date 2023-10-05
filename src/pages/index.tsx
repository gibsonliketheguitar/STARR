import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthRoutes } from '@pages/authorized';
import { Login } from '@pages/login';
import { Event } from '@auth/event'
import { Dashboard } from '@auth/dashboard';
import { Playlist } from '@auth/playlist';
import { PrivateDashboard } from '@auth/private-dashboard';
import { Profile } from '@auth/profile';
import { Scheduler } from '@auth/scheduler';
import { Faq } from '@auth/faq';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<AuthRoutes />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='private-dashboard'>
              <Route path=":id" element={<PrivateDashboard />} />
            </Route>
            <Route path='event' element={<Event />} />
            <Route path='playlist' element={<Playlist />} />
            <Route path='scheduler' element={<Scheduler />} />
            <Route path='profile' element={<Profile />} />
            <Route path='faq' element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode >,
)
