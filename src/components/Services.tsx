import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  RecyclingOutlined,
  BuildOutlined,
  CleaningServices,
  LocalShipping,
  BusinessCenter,
  CheckCircleOutline,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const services = [
    {
      icon: <RecyclingOutlined sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('services.list.waste.title'),
      description: t('services.list.waste.description'),
      features: t('services.list.waste.features', { returnObjects: true }) as string[]
    },
    {
      icon: <BuildOutlined sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('services.list.construction.title'),
      description: t('services.list.construction.description'),
      features: t('services.list.construction.features', { returnObjects: true }) as string[]
    },
    {
      icon: <CleaningServices sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('services.list.cleaning.title'),
      description: t('services.list.cleaning.description'),
      features: t('services.list.cleaning.features', { returnObjects: true }) as string[]
    },
    {
      icon: <LocalShipping sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('services.list.treatment.title'),
      description: t('services.list.treatment.description'),
      features: t('services.list.treatment.features', { returnObjects: true }) as string[]
    },
  ];

  return (
    <Box id="services" sx={{ py: 10, backgroundColor: 'white' }}>
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
            {t('services.title')}
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
            {t('services.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'text.primary',
                      textAlign: 'center',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                      textAlign: 'center',
                    }}
                  >
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutline sx={{ color: 'primary.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: 'primary.main',
            borderRadius: 2,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              opacity: 0.9,
            }}
          >
            Contact us today to discuss your oil and waste management needs
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Professional Support Available
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Services;