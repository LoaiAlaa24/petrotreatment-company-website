import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Careers from '../components/Careers';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ mt: 8 }}> {/* Add margin top to account for fixed header */}
        <Careers />
      </Box>
      <Footer />
    </Box>
  );
};

export default CareersPage;