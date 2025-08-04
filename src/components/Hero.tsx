import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowForward, VerifiedUser } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const heroImages = [
    'hero_images/78cc76ed-3663-4953-af86-c6728ac8aa2d.jpg',
    'hero_images/e75c903a-761c-4d05-ae51-8cfaed68e1b8.jpg',
    'hero_images/IMG_0937.jpg',
    'hero_images/IMG_0948.jpg',
    'hero_images/IMG_0975.jpg',
    'hero_images/PHOTO-2025-02-21-01-18-14.jpg',
    'hero_images/PHOTO-2025-02-21-01-18-15.jpg',
  ];

  useEffect(() => {
    // Preload images for better performance
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroImages]);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCertifications = () => {
    const element = document.getElementById('certifications');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#1B4B8C', // Fallback color
      }}
    >
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Hero background ${index + 1}`}
          onError={() => {
            console.error(`Failed to load image: ${image}`);
          }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  letterSpacing: '0.15em',
                  mb: 2,
                  display: 'block',
                }}
              >
                {t('hero.company')}
              </Typography>
              
              {/* <Typography
                variant={isMobile ? 'h3' : 'h1'}
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.1,
                  textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                }}
              >
                Advanced Waste Treatment & Oil Recovery Services
              </Typography> */}
              
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                  maxWidth: 600,
                  mx: { xs: 'auto', lg: 0 },
                }}
              >
                {t('hero.subtitle')}
              </Typography>

              <Box sx={{ mb: 5 }}>
                <Grid container spacing={3} justifyContent={{ xs: 'center', lg: 'flex-start' }}>
                  {[
                    { number: '28+', label: t('hero.stats.experience') },
                    { number: '4', label: t('hero.stats.certifications') },
                    { number: '14+', label: t('hero.stats.clients') }
                  ].map((stat, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 0.5,
                            textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                            fontSize: { xs: '2rem', md: '3rem' },
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.9rem',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', lg: 'flex-start' },
                alignItems: 'center'
              }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToServices}
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 2,
                    textTransform: 'none',
                    backgroundColor: '#1B4B8C',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(27, 75, 140, 0.3)',
                    '&:hover': {
                      backgroundColor: '#0F2A4C',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(27, 75, 140, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.buttons.services')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<VerifiedUser />}
                  onClick={scrollToCertifications}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 2,
                    textTransform: 'none',
                    borderWidth: 2,
                    borderColor: 'white',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#3366B3',
                      backgroundColor: 'rgba(51, 102, 179, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(51, 102, 179, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.buttons.certificates')}
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: 300, lg: 400 },
              }}
            >
              {/* <Box
                sx={{
                  textAlign: 'center',
                  background: 'transparent',
                  backdropFilter: 'blur(25px) saturate(1.5)',
                  WebkitBackdropFilter: 'blur(25px) saturate(1.5)',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.05)',
                    boxShadow: '0 40px 120px rgba(0, 0, 0, 0.6), 0 0 40px rgba(51, 102, 179, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    border: '1px solid rgba(51, 102, 179, 0.6)',
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(51, 102, 179, 0.05))',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(51, 102, 179, 0.1), rgba(27, 75, 140, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      display: 'inline-block',
                      p: 2,
                      borderRadius: 2,
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.9)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 10px 30px rgba(51, 102, 179, 0.2)',
                      },
                    }}
                  >
                    <img
                      src="/logo.png"
                      alt="Petrotreatment Logo"
                      style={{
                        width: '190px',
                        height: '150px',
                        objectFit: 'contain',
                        filter: 'brightness(1.1) contrast(1.1)',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 1.5,
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Environmental Excellence
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                      fontSize: '0.95rem',
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    Trusted by industry leaders across the MENA region
                  </Typography>
                </Box>
              </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;