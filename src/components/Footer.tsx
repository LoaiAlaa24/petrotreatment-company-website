import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (sectionKey: string) => {
    if (sectionKey === 'Careers') {
      navigate('/careers');
    } else {
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(sectionKey);
        }, 100);
      } else {
        scrollToSection(sectionKey);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1B4B8C',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <img
                src="/logo.png"
                alt="Petrotreatment Logo"
                style={{
                  height: '70px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                PETROTREATMENT
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                mb: 4,
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: 400,
              }}
            >
              Leading provider of comprehensive oil and waste management services, 
              committed to excellence, safety, and environmental sustainability.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ fontSize: 18, mr: 2, color: '#3366B3' }} />
              <Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', direction: 'ltr', fontFamily: 'monospace' }}>
                  +20 101001604667
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', direction: 'ltr', fontFamily: 'monospace' }}>
                  +20 1112121294
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', direction: 'ltr', fontFamily: 'monospace' }}>
                  +20 1012345167
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ fontSize: 18, mr: 2, color: '#3366B3' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                info@petrotreatment.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ fontSize: 18, mr: 2, color: '#3366B3' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Cairo, Egypt
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: 'white',
                  }}
                >
                  {t('footer.quickLinks')}
                </Typography>
                <Box>
                  {[
                    { key: 'Home', label: t('navigation.home') },
                    { key: 'About', label: t('navigation.about') },
                    { key: 'Services', label: t('navigation.services') },
                    { key: 'Projects', label: t('navigation.projects') },
                    { key: 'Clients', label: t('navigation.clients') },
                    { key: 'Careers', label: t('navigation.careers') },
                    { key: 'Contact', label: t('navigation.contact') }
                  ].map((item) => (
                    <Link
                      key={item.key}
                      component="button"
                      onClick={() => handleNavigation(item.key)}
                      sx={{
                        display: 'block',
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        mb: 1.5,
                        fontSize: '0.875rem',
                        textAlign: 'left',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#3366B3',
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: 'white',
                  }}
                >
                  {t('footer.services')}
                </Typography>
                <Box>
                  {[
                    t('footer.servicesList.waste'),
                    t('footer.servicesList.oil'),
                    t('footer.servicesList.cleaning'),
                    t('footer.servicesList.plants'),
                  ].map((service) => (
                    <Typography
                      key={service}
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 1.5,
                        display: 'block',
                      }}
                    >
                      {service}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: { xs: 2, sm: 0 },
            }}
          >
            © {currentYear} Petrotreatment. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
            }}
          >
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: '#3366B3',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: '#3366B3',
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;