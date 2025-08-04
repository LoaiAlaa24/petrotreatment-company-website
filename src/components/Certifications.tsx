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
import { useTranslation } from 'react-i18next';

const Certifications: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const certifications = [
    {
      name: t('certifications.list.iso9001.name'),
      description: t('certifications.list.iso9001.description'),
      logo: '/certificates/iso 9001.jpeg',
      details: t('certifications.list.iso9001.details')
    },
    {
      name: t('certifications.list.iso14001.name'),
      description: t('certifications.list.iso14001.description'),
      logo: '/certificates/14001-2015.png',
      details: t('certifications.list.iso14001.details')
    },
    {
      name: t('certifications.list.iso45001.name'),
      description: t('certifications.list.iso45001.description'),
      logo: '/certificates/iso-45001-2018-occupational-health-and-safety-ohs--500x500.png.webp',
      details: t('certifications.list.iso45001.details')
    },
    {
      name: t('certifications.list.wmra.name'),
      description: t('certifications.list.wmra.description'),
      logo: '/certificates/WMRA.png',
      details: t('certifications.list.wmra.details')
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
              {t('certifications.title')}
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
            {t('certifications.subtitle')}
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
            {t('certifications.excellence.title')}
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
                {t('about.stats.internationalCertifications')}
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
                {t('certifications.excellence.compliance')}
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
                {t('certifications.excellence.operations')}
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
            {t('certifications.excellence.description')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Certifications;