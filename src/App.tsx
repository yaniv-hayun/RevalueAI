import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './pages/landing';
import { LoginPage } from './pages/auth';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics';
import Actions from './pages/actions';
import Chargebacks from './pages/chargebacks';
import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

export interface User {
  id: string
  name: string
  email: string
}

function App() {
  const { isLoading, isAuthenticated, user: auth0User, logout } = useAuth0()

  console.log('auth0User', auth0User);
  console.log('isAuthenticated', isAuthenticated);
  console.log('isLoading', isLoading);
  const handleLogout = () => {
    logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    })
  }

  // Convert Auth0 user to our User interface
  const user: User | null = auth0User ? {
    id: auth0User.sub || '',
    name: auth0User.name || '',
    email: auth0User.email || ''
  } : null

  // On first login, sync user to backend DB
  // React.useEffect(() => {
  //   // const syncUser = async () => {
  //   //   if (isAuthenticated && auth0User?.email && auth0User?.sub) {
  //   //     try {
  //   //       await fetch(((import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:9000/api/v1') + '/users/sync', {
  //   //         method: 'POST',
  //   //         headers: { 'Content-Type': 'application/json' },
  //   //         body: JSON.stringify({ email: auth0User.email, name: auth0User.name, auth0_id: auth0User.sub })
  //   //       })
  //   //     } catch (e) {
  //   //       // Non-blocking: log to console only
  //   //       console.warn('Failed to sync user', e)
  //   //     }
  //   //   }
  //   // }
  //   // syncUser()
  // }, [isAuthenticated, auth0User?.email, auth0User?.sub])

  // Show loading while Auth0 is initializing
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: 2
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Routes>
      {/* Public route - Landing page */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LandingPage />
          )
        } 
      />
      
      {/* Login route */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected routes - Dashboard and all other pages */}
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated ? (
            <Layout>
              <Dashboard />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/analytics" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/actions" 
        element={
          isAuthenticated ? (
            <Layout>
              <Actions />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/chargebacks" 
        element={
          isAuthenticated ? (
            <Layout>
              <Chargebacks />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/fraud-detection" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/reports" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/trends" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/transactions" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/settings" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/help" 
        element={
          isAuthenticated ? (
            <Layout>
              <Analytics />
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
    </Routes>
  )
}

export default App;
