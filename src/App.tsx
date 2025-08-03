import React, { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import './i18n/i18n';

// Lazy load components that are below the fold
const About = React.lazy(() => import('./components/About'));
const History = React.lazy(() => import('./components/History'));
const Services = React.lazy(() => import('./components/Services'));
const Resources = React.lazy(() => import('./components/Resources'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Clients = React.lazy(() => import('./components/Clients'));
const MajorProjects = React.lazy(() => import('./components/MajorProjects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4B8C', // Deep petroleum blue
      dark: '#0F2A4C',
      light: '#3366B3',
    },
    secondary: {
      main: '#2E7D32', // Environmental green
      dark: '#1B5E20',
      light: '#4CAF50',
    },
    success: {
      main: '#2E7D32', // Green for environmental focus
      dark: '#1B5E20',
      light: '#4CAF50',
    },
    warning: {
      main: '#F57C00', // Oil/energy orange
      dark: '#E65100',
      light: '#FF9800',
    },
    background: {
      default: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
  },
});

// Loading component
const LoadingSpinner = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      py: 4 
    }}
  >
    <CircularProgress size={40} />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <Clients />
        <Services />
        <History />
        <Certifications />
        <Achievements />
        <Resources />
        <MajorProjects />
        <Contact />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;