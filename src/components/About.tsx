import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Engineering,
  Nature,
  Security,
  VerifiedUser,
  EmojiEvents,
  Business,
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <VerifiedUser sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'ISO Certified',
      description: 'Certified in ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and WMRA compliant'
    },
    {
      icon: <Engineering sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Comprehensive Services',
      description: 'From waste collection to treatment plant construction and oil sludge processing'
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Award-Winning',
      description: 'National competition winners with COP28 and COP29 climate conference participation'
    },
    {
      icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Trusted Partners',
      description: 'Serving major clients including Petrobel, Edison, Expro, and leading oil companies'
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
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
            About Petrotreatment
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 900,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Founded in 2014 and building on 28+ years of combined experience, Petrotreatment is 
            a leading provider of comprehensive waste management and oil treatment services, 
            serving major clients across Egypt's coastal areas, Sinai, and the Delta region.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 3,
              }}
            >
              Our Story & Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              <strong>Petrotreatment was officially founded in May 2014</strong>, building on the legacy 
              of sister companies operating since 1996, including Petroleum Services, Al Masrya Transport 
              Company, and Al Assrya for Petroleum and Environmental Services.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              We specialize in <strong>comprehensive waste management</strong> - from collection and transportation 
              to treatment and safe disposal. Our services include industrial tank cleaning, sludge handling, 
              oil treatment operations, and construction of specialized treatment facilities.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              With our modern fleet equipped with the latest safety standards and our dedicated treatment 
              plant serving coastal areas, North Sinai, South Sinai, and the Delta, we deliver environmental 
              solutions that meet international standards while driving sustainable development.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: 2,
                p: 4,
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                28+
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                }}
              >
                Years Combined Experience
              </Typography>
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
                  mb: 3,
                }}
              >
                International Certifications
              </Typography>
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
              >
                National Awards
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;