import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';

const Certifications: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      logo: '/certificates/iso 9001.jpeg',
      details: 'International standard for quality management systems'
    },
    {
      name: 'ISO 14001:2015',  
      description: 'Environmental Management Systems',
      logo: '/certificates/14001-2015.png',
      details: 'Environmental management and sustainability standards'
    },
    {
      name: 'ISO 45001:2018',
      description: 'Occupational Health & Safety',
      logo: '/certificates/iso-45001-2018-occupational-health-and-safety-ohs--500x500.png.webp',
      details: 'Occupational health and safety management systems'
    },
    {
      name: 'WMRA',
      description: 'Waste Management Regulatory Authority',
      logo: '/certificates/WMRA.png',
      details: 'Authorized waste management and disposal services'
    },
  ];

  return (
    <Box id="certifications" sx={{ py: 10, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
            <VerifiedUser sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
              }}
            >
              Certifications & Compliance
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Our commitment to excellence is demonstrated through internationally recognized 
            certifications and regulatory compliance, ensuring the highest standards in 
            quality, safety, and environmental management.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                  },
                  border: '2px solid',
                  borderColor: 'primary.light',
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: 'background.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 140,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={cert.logo}
                    alt={cert.name}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100px',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {cert.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {cert.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                    }}
                  >
                    {cert.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            p: 6,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Committed to Excellence
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                4
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                }}
              >
                International Certifications
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                100%
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                }}
              >
                Regulatory Compliance
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                25+
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                }}
              >
                Years of Certified Operations
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              fontSize: '1.1rem',
              opacity: 0.9,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            These certifications reflect our unwavering commitment to maintaining 
            the highest standards in quality, environmental responsibility, and workplace safety.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Certifications;