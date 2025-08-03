import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import {
  LocationOn,
  CalendarToday,
  Engineering,
  ArrowBackIos,
  ArrowForwardIos,
  FiberManualRecord,
} from '@mui/icons-material';

const ImageCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

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

  if (images.length === 0) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 0,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <CardMedia
          key={index}
          component="img"
          image={image}
          alt={`${alt} - ${index + 1}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      ))}
      
      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              width: 40,
              height: 40,
              opacity: isHovered ? 1 : 0.7,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ArrowBackIos sx={{ fontSize: 16 }} />
          </IconButton>
          
          <IconButton
            onClick={goToNext}
            sx={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              width: 40,
              height: 40,
              opacity: isHovered ? 1 : 0.7,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: 16 }} />
          </IconButton>

          {/* Slide Indicators */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 15,
              p: 1,
            }}
          >
            {images.map((_, index) => (
              <IconButton
                key={index}
                size="small"
                onClick={() => goToSlide(index)}
                sx={{
                  p: 0.5,
                  minWidth: 'auto',
                  color: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <FiberManualRecord sx={{ fontSize: 8 }} />
              </IconButton>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

const MajorProjects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projects = [
    {
      id: 1,
      title: 'Central Treatment Plant Project – East Qantara',
      year: '2023',
      location: 'Industrial Zone, East Qantara, Ismailia Governorate',
      objective: 'Treating water associated with oil and gas production',
      description: 'This project plays a pivotal role in Sinai, given its strategic location at the heart of the region, serving as a central hub for the treatment of water associated with oil and gas production. Backed by a dedicated team of experts, it ensures the application of best practices to maximize efficiency and environmental impact.',
      status: 'Completed',
      statusColor: 'success',
      images: [
        '/projects/sinai/PHOTO-2025-02-21-01-18-14.jpg',
        '/projects/sinai/PHOTO-2025-02-21-01-18-15.jpg',
      ],
    },
    {
      id: 2,
      title: 'Collaboration with Russian Side – El-Dabaa Nuclear Reactor',
      year: '2025',
      location: 'El Dabaa, Matrouh Governorate, Egypt',
      objective: 'Treating sewage water',
      description: 'In this project, we are responsible for operating the treatment plants within the El-Dabaa Nuclear Reactor area. Our services support leading international companies, including ASE JRC, TREST ROSSEM, and SMU1, ensuring the highest standards of safety, reliability, and operational excellence in a highly sensitive and strategic environment.',
      status: 'Ongoing',
      statusColor: 'primary',
      images: [
        '/projects/dabaa/78cc76ed-3663-4953-af86-c6728ac8aa2d.jpg',
        '/projects/dabaa/e75c903a-761c-4d05-ae51-8cfaed68e1b8.jpg',
      ],
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              mb: 2,
              display: 'block',
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2,
            }}
          >
            Major Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Showcasing our expertise in large-scale water treatment and environmental solutions 
            across Egypt's most strategic locations
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={project.id}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                    transform: 'translateY(-8px)',
                    borderColor: 'primary.light',
                  },
                }}
              >
                <Grid container sx={{ minHeight: 400 }}>
                  <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    sx={{ 
                      order: { xs: 1, md: index % 2 === 0 ? 1 : 2 }
                    }}
                  >
                    <Box sx={{ position: 'relative', height: '100%', minHeight: 400 }}>
                      <ImageCarousel 
                        images={project.images} 
                        alt={project.title}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          left: 20,
                          display: 'flex',
                          gap: 1,
                          zIndex: 2,
                        }}
                      >
                        <Chip
                          label={project.year}
                          sx={{
                            backgroundColor: 'rgba(27, 75, 140, 0.95)',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.875rem',
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    sx={{ 
                      order: { xs: 2, md: index % 2 === 0 ? 2 : 1 }
                    }}
                  >
                    <CardContent sx={{ 
                      p: { xs: 3, md: 5 }, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography
                        variant={isMobile ? 'h5' : 'h4'}
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          mb: 3,
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <LocationOn sx={{ 
                            color: 'primary.main', 
                            mr: 1.5, 
                            mt: 0.2, 
                            fontSize: 22
                          }} />
                          <Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                mb: 0.5,
                              }}
                            >
                              Location
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                                lineHeight: 1.5,
                              }}
                            >
                              {project.location}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          <Engineering sx={{ 
                            color: 'primary.main', 
                            mr: 1.5, 
                            mt: 0.2, 
                            fontSize: 22
                          }} />
                          <Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                mb: 0.5,
                              }}
                            >
                              Objective
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                                lineHeight: 1.5,
                              }}
                            >
                              {project.objective}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: '1rem',
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 10,
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, #1B4B8C 0%, #2E7D32 100%)',
            borderRadius: 4,
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Strategic Project Excellence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 5,
              maxWidth: 600,
              mx: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Delivering world-class environmental solutions across Egypt's most critical infrastructure projects
          </Typography>
          <Grid container spacing={4}>
            {[
              { number: '2', label: 'Major Projects', sublabel: 'Strategic Locations' },
              { number: '3', label: 'Governorates', sublabel: 'Coverage Area' },
              { number: '100%', label: 'Safety Standards', sublabel: 'Certified Quality' },
              { number: '5+', label: 'International', sublabel: 'Partners' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      fontSize: { xs: '2rem', md: '3rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 0.5,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      fontSize: '0.875rem',
                    }}
                  >
                    {stat.sublabel}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MajorProjects;