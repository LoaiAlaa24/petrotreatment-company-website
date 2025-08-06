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
import { FormatQuote } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Chairman: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Box id="chairman" sx={{ py: 10, backgroundColor: 'grey.50' }}>
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
            {t('chairman.title')}
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
            {t('chairman.subtitle')}
          </Typography>
        </Box>

        <Card
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            boxShadow: theme.shadows[8],
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}05 100%)`,
              pointerEvents: 'none',
            },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  mb: { xs: 3, md: 0 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -8,
                      left: -8,
                      right: -8,
                      bottom: -8,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      borderRadius: '50%',
                      zIndex: 0,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/chairman/img.jpeg"
                    alt={t('chairman.name')}
                    sx={{
                      width: { xs: 200, md: 250 },
                      height: { xs: 200, md: 250 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      position: 'relative',
                      zIndex: 1,
                      border: '4px solid white',
                      boxShadow: theme.shadows[12],
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box sx={{ position: 'relative' }}>
                {/* Quote Icon */}
                <FormatQuote
                  sx={{
                    fontSize: { xs: 48, md: 64 },
                    color: 'primary.main',
                    opacity: 0.2,
                    position: 'absolute',
                    top: -20,
                    left: isRTL ? 'auto' : -10,
                    right: isRTL ? -10 : 'auto',
                    transform: isRTL ? 'scaleX(-1)' : 'none',
                  }}
                />
                
                <Typography
                  variant={isMobile ? 'h6' : 'h5'}
                  sx={{
                    color: 'text.primary',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    mb: 4,
                    position: 'relative',
                    zIndex: 1,
                    '&::before': {
                      content: '""',
                      display: 'block',
                      width: 60,
                      height: 4,
                      backgroundColor: 'primary.main',
                      borderRadius: 2,
                      mb: 3,
                      mx: isRTL ? 'auto' : 0,
                    },
                  }}
                >
                  "{t('chairman.quote')}"
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isRTL ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 0.5,
                    }}
                  >
                    {t('chairman.name')}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {t('chairman.position')}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Chairman;