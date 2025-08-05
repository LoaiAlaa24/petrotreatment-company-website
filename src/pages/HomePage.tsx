import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load components with preloading for better UX
const About = React.lazy(() => 
  import('../components/About').then(module => {
    // Preload the next component
    import('../components/Clients');
    return module;
  })
);

const Clients = React.lazy(() => 
  import('../components/Clients').then(module => {
    import('../components/Services');
    return module;
  })
);

const Services = React.lazy(() => 
  import('../components/Services').then(module => {
    import('../components/History');
    return module;
  })
);

const History = React.lazy(() => 
  import('../components/History').then(module => {
    import('../components/Certifications');
    return module;
  })
);

const Certifications = React.lazy(() => 
  import('../components/Certifications').then(module => {
    import('../components/Achievements');
    return module;
  })
);

const Achievements = React.lazy(() => 
  import('../components/Achievements').then(module => {
    import('../components/Resources');
    return module;
  })
);

const Resources = React.lazy(() => import('../components/Resources'));
const MajorProjects = React.lazy(() => import('../components/MajorProjects'));
const Media = React.lazy(() => import('../components/Media'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

// Optimized loading component with skeleton
const LoadingSpinner = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      py: 4,
      minHeight: '200px',
    }}
  >
    <CircularProgress size={40} thickness={2} />
    <Box
      sx={{
        mt: 2,
        width: '60%',
        height: '12px',
        backgroundColor: 'grey.200',
        borderRadius: 1,
        animation: 'pulse 1.5s ease-in-out infinite',
        '@keyframes pulse': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.4 },
          '100%': { opacity: 1 },
        },
      }}
    />
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
        <Media />
        <Contact />
        <Footer />
      </Suspense>
    </Box>
  );
};

export default HomePage;