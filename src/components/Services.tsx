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

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <RecyclingOutlined sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Comprehensive Waste Management',
      description: 'Complete waste management solutions from collection to safe disposal with environmental compliance.',
      features: [
        'Waste collection and transportation',
        'Treatment and processing',
        'Safe disposal operations',
        'Hazardous and non-hazardous waste handling'
      ]
    },
    {
      icon: <BuildOutlined sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Treatment Unit Construction',
      description: 'Design and construction of specialized treatment facilities for various types of industrial waste.',
      features: [
        'Construction of waste treatment units',
        'Hazardous waste treatment facilities',
        'Non-hazardous industrial waste units',
        'Brine water treatment units for oil & gas sites'
      ]
    },
    {
      icon: <CleaningServices sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Industrial Cleaning Services',
      description: 'Professional cleaning and maintenance services for industrial facilities and equipment.',
      features: [
        'Industrial tank cleaning',
        'Sludge handling and transportation',
        'Oil sludge treatment and disposal',
        'Safe disposal operations'
      ]
    },
    {
      icon: <LocalShipping sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Oil Treatment Operations',
      description: 'Complete oil treatment services from processing to marketing of recycled products.',
      features: [
        'Oil treatment operations execution',
        'Sludge transport and treatment',
        'Marketing of treated products',
        'Sale of recycled materials'
      ]
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
            Our Services
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
            Comprehensive solutions for all your oil and waste management needs, 
            delivered by industry experts with proven track records.
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