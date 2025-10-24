import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from './contexts/ThemeContext'
import Auth0ProviderWrapper from './contexts/Auth0Provider'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0ProviderWrapper>
      <BrowserRouter>
        <ThemeProvider>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Auth0ProviderWrapper>
  </React.StrictMode>,
)
