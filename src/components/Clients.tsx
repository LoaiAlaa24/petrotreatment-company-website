import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Clients: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const clients = [
    {
      name: 'Expro',
      logo: '/clients/Expro_Logo.jpg',
    },
    {
      name: 'Amer Group',
      logo: '/clients/amer_group.png',
    },
    {
      name: 'ASE',
      logo: '/clients/ase.jpeg',
    },
    {
      name: 'Edison',
      logo: '/clients/edison.png',
    },
    {
      name: 'EPSCO',
      logo: '/clients/epsco.jpeg',
    },
    {
      name: 'Franks',
      logo: '/clients/franks.png',
    },
    {
      name: 'Mansoura Petroleum',
      logo: '/clients/mansoura_petroleum_logo.jpeg',
    },
    {
      name: 'NPPA',
      logo: '/clients/nppa.jpeg',
    },
    {
      name: 'Petrobel',
      logo: '/clients/petrobel.jpeg',
    },
    {
      name: 'Petrosafe',
      logo: '/clients/petrosafe.gif',
    },
    {
      name: 'Petrotrade',
      logo: '/clients/petrotrade.jpeg',
    },
    {
      name: 'Scomi Oil Tools',
      logo: '/clients/scomi_oil_tools_middle_east_logo.jpeg',
    },
    {
      name: 'Shelf Drilling',
      logo: '/clients/shelf_drilling_logo.jpeg',
    },
    {
      name: 'Trest',
      logo: '/clients/trest.jpeg',
    },
    {
      name: 'GE',
      logo: '/clients/ge.jpg',
    },
    {
      name: 'Petromaint',
      logo: '/clients/petromaint.jpeg',
    },
    {
      name: 'Al-Siham Petroleum',
      logo: '/clients/شركة-السهام-البترولية.jpg',
    },
    {
      name: 'Additional Client',
      logo: '/clients/٢٠٢١١٢٠٣_١٥٣٨٢٢.jpg',
    },
    {
      name: 'Client Partner',
      logo: '/clients/PSX_20210817_040154.jpg',
    },
  ];

  return (
    <Box id="clients" sx={{ py: 10, backgroundColor: 'background.default' }}>
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
            {t('clients.title')}
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
            {t('clients.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {clients.map((client, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
              <Card
                sx={{
                  height: 120,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                  cursor: 'pointer',
                }}
              >
                <CardMedia
                  component="img"
                  image={client.logo}
                  alt={client.name}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '80px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Clients;