import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { SocketContextProvider } from './context/SocketContext.tsx';

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SocketContextProvider>
          <GoogleOAuthProvider clientId="448458401188-0lk6pg9t0l02qk4s489itebh9rsvk6oe.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </SocketContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);