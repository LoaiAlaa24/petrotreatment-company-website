import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load components that are below the fold
const About = React.lazy(() => import('../components/About'));
const History = React.lazy(() => import('../components/History'));
const Services = React.lazy(() => import('../components/Services'));
const Resources = React.lazy(() => import('../components/Resources'));
const Certifications = React.lazy(() => import('../components/Certifications'));
const Achievements = React.lazy(() => import('../components/Achievements'));
const Clients = React.lazy(() => import('../components/Clients'));
const MajorProjects = React.lazy(() => import('../components/MajorProjects'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

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

const HomePage: React.FC = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default HomePage;