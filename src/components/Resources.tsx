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
  LocalShipping,
  Security,
  LocationOn,
  Factory,
  CheckCircle,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Resources: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const serviceAreas = [
    { name: t('resources.serviceAreas.coastalArea') },
    { name: t('resources.serviceAreas.northSinai') },
    { name: t('resources.serviceAreas.southSinai') },
    { name: t('resources.serviceAreas.delta') },
  ];

  const fleetFeatures = [
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('resources.fleetFeatures.safety.title'),
      description: t('resources.fleetFeatures.safety.description')
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('resources.fleetFeatures.fleet.title'),
      description: t('resources.fleetFeatures.fleet.description')
    },
    {
      icon: <Factory sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('resources.fleetFeatures.plant.title'),
      description: t('resources.fleetFeatures.plant.description')
    },
  ];

  return (
    <Box id="resources" sx={{ py: 10, backgroundColor: 'background.default' }}>
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
            {t('resources.title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {t('resources.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                {t('about.stats.advancedFleet')}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: '1.1rem',
                }}
              >
                {t('resources.fleetDescription')}
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: 'text.primary',
                    mb: 2,
                  }}
                >
                  {t('resources.coverageTitle')}
                </Typography>
                <Grid container spacing={2}>
                  {serviceAreas.map((area, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Card
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          border: '2px solid',
                          borderColor: 'primary.light',
                          '&:hover': {
                            borderColor: 'primary.main',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <LocationOn 
                          sx={{ 
                            fontSize: 40, 
                            color: 'primary.main',
                            mb: 1 
                          }} 
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                          }}
                        >
                          {area.name}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {fleetFeatures.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 3,
                      '&:hover': {
                        boxShadow: theme.shadows[8],
                        transform: 'translateY(-4px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ flexShrink: 0 }}>
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          mb: 1,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* <Box
          sx={{
            mt: 8,
            p: 6,
            backgroundColor: 'primary.main',
            borderRadius: 3,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <LocationOn sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Strategic Regional Coverage
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Our specialized treatment plant and fleet are strategically positioned to serve 
            key regions across Egypt's most important industrial and coastal areas
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <CheckCircle sx={{ fontSize: 40, mb: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Safety First
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9 }}
              >
                Latest safety standards
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <CheckCircle sx={{ fontSize: 40, mb: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Regional Focus
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9 }}
              >
                4 key service areas
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <CheckCircle sx={{ fontSize: 40, mb: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Specialized Equipment
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9 }}
              >
                Purpose-built vehicles
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <CheckCircle sx={{ fontSize: 40, mb: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Dedicated Facility
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9 }}
              >
                Custom treatment plant
              </Typography>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Resources;