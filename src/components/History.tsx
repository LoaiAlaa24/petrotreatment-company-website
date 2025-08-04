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
  History as HistoryIcon,
  Business,
  LocalShipping,
  Nature,
  Engineering,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const History: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const timelineEvents = [
    {
      year: '1996',
      title: t('history.timeline.1996.title'),
      description: t('history.timeline.1996.description'),
      companies: t('history.timeline.1996.companies', { returnObjects: true }) as string[],
      icon: <Business sx={{ color: 'white' }} />,
      color: 'secondary.main',
    },
    {
      year: '2014',
      title: t('history.timeline.2014.title'),
      description: t('history.timeline.2014.description'),
      companies: t('history.timeline.2014.companies', { returnObjects: true }) as string[],
      icon: <HistoryIcon sx={{ color: 'white' }} />,
      color: 'primary.main',
    },
    {
      year: '2018',
      title: t('history.timeline.2018.title'),
      description: t('history.timeline.2018.description'),
      companies: t('history.timeline.2018.companies', { returnObjects: true }) as string[],
      icon: <Engineering sx={{ color: 'white' }} />,
      color: 'primary.dark',
    },
    {
      year: '2024',
      title: t('history.timeline.2024.title'),
      description: t('history.timeline.2024.description'),
      companies: t('history.timeline.2024.companies', { returnObjects: true }) as string[],
      icon: <Nature sx={{ color: 'white' }} />,
      color: 'success.main',
    },
  ];

  return (
    <Box id="history" sx={{ py: 10, backgroundColor: 'white' }}>
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
            {t('history.title')}
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
            {t('history.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: 'background.default',
                boxShadow: theme.shadows[4],
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  {t('history.journey.title')}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {t('history.journey.founding')}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {t('history.journey.pioneers')}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {t('history.journey.expansion')}
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    backgroundColor: 'primary.main',
                    borderRadius: 2,
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
                      opacity: 0.9,
                    }}
                  >
                    {t('about.stats.yearsExperience')}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      opacity: 0.8,
                    }}
                  >
                    {t('history.journey.since')}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', pl: 2 }}>
              {timelineEvents.map((event, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    mb: index < timelineEvents.length - 1 ? 4 : 0,
                    position: 'relative',
                  }}
                >
                  {/* Timeline Line */}
                  {index < timelineEvents.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 28,
                        top: 56,
                        width: 2,
                        height: 60,
                        backgroundColor: 'divider',
                        zIndex: 0,
                      }}
                    />
                  )}
                  
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: event.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: theme.shadows[4],
                      mr: 3,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {event.icon}
                  </Box>
                  
                  {/* Timeline Content */}
                  <Box sx={{ flex: 1, py: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: event.color,
                        mb: 0.5,
                      }}
                    >
                      {event.year}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 'bold',
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        mb: event.companies.length > 0 ? 1 : 0,
                      }}
                    >
                      {event.description}
                    </Typography>
                    {event.companies.length > 0 && (
                      <Box>
                        {event.companies.map((company, companyIndex) => (
                          <Typography
                            key={companyIndex}
                            variant="caption"
                            sx={{
                              display: 'block',
                              color: 'primary.main',
                              fontWeight: 'bold',
                              fontSize: '0.75rem',
                            }}
                          >
                            • {company}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default History;