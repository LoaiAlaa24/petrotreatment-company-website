import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { 
  EmojiEvents, 
  ArrowBackIos, 
  ArrowForwardIos,
  FiberManualRecord 
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const ImageCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  // Auto-advance slides (pause on hover)
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: theme.shadows[8],
        '&:hover': {
          boxShadow: theme.shadows[16],
        },
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative', height: 350 }}>
        {/* Image Stack with smooth transitions */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          {images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="350"
              image={image}
              alt={`${alt} - ${index + 1}`}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                objectFit: 'cover',
                opacity: index === currentIndex ? 1 : 0,
                transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
                filter: index === currentIndex ? 'none' : 'blur(2px)',
              }}
            />
          ))}
        </Box>

        {/* Gradient Overlays for better text readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        
        {/* Navigation Arrows */}
        <IconButton
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'primary.main',
            width: 48,
            height: 48,
            opacity: isHovered ? 1 : 0.7,
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: theme.shadows[8],
            },
          }}
        >
          <ArrowBackIos sx={{ ml: 0.5 }} />
        </IconButton>
        
        <IconButton
          onClick={goToNext}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'primary.main',
            width: 48,
            height: 48,
            opacity: isHovered ? 1 : 0.7,
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: theme.shadows[8],
            },
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        {/* Modern Slide Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1.5,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 20,
            p: 1.5,
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: index === currentIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: index === currentIndex 
                  ? 'white' 
                  : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>

        {/* Image Counter */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 20,
            fontSize: '0.875rem',
            fontWeight: 'bold',
            backdropFilter: 'blur(10px)',
          }}
        >
          {currentIndex + 1} / {images.length}
        </Box>
      </Box>
    </Box>
  );
};

const Achievements: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const achievements = [
    {
      id: 1,
      year: t('achievements.list.2023.year'),
      title: t('achievements.list.2023.title'),
      project: t('achievements.list.2023.project'),
      awards: t('achievements.list.2023.awards', { returnObjects: true }) as string[],
      conference: t('achievements.list.2023.conference'),
      images: [
        '/achievements/1/PHOTO-2023-11-10-00-28-03.jpg',
        '/achievements/1/PHOTO-2023-11-15-18-06-54.jpg',
        '/achievements/1/PHOTO-2023-12-06-05-46-15.jpg',
        '/achievements/1/IMG_1822.jpg',
      ],
    },
    {
      id: 2,
      year: t('achievements.list.2024.year'),
      title: t('achievements.list.2024.title'),
      project: t('achievements.list.2024.project'),
      awards: t('achievements.list.2024.awards', { returnObjects: true }) as string[],
      conference: t('achievements.list.2024.conference'),
      images: [
        '/achievements/2/PHOTO-2025-03-24-14-11-47.jpg',
        '/achievements/2/A.jpg',
        '/achievements/2/PHOTO-2024-10-31-02-21-21 2.jpg',
        '/achievements/2/IMG_1821.jpg',
      ],
    },
  ];

  return (
    <Box id="achievements" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2,
            }}
          >
            {t('achievements.title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {t('achievements.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {achievements.slice().reverse().map((achievement, index) => (
            <Grid item xs={12} key={achievement.id}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    boxShadow: theme.shadows[8],
                  },
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                          mb: 1,
                        }}
                      >
                        {achievement.year}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          mb: 2,
                          lineHeight: 1.3,
                        }}
                      >
                        {achievement.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'secondary.main',
                          fontWeight: 500,
                          mb: 3,
                        }}
                      >
{t('achievements.project')}: {achievement.project}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      {achievement.awards.map((award, awardIndex) => (
                        <Typography
                          key={awardIndex}
                          variant="body1"
                          sx={{
                            color: 'text.primary',
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <EmojiEvents sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                          {award}
                        </Typography>
                      ))}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontStyle: 'italic',
                      }}
                    >
                      {achievement.conference}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <ImageCarousel 
                      images={achievement.images} 
                      alt={achievement.project}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;