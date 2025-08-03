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

const History: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const timelineEvents = [
    {
      year: '1996',
      title: 'Foundation Era',
      description: 'Sister companies began operations focusing on waste transport and environmental services',
      companies: ['Petroleum Services', 'Al Masrya Transport Company', 'Al Assrya for Petroleum and Environmental Services'],
      icon: <Business sx={{ color: 'white' }} />,
      color: 'secondary.main',
    },
    {
      year: '2000s',
      title: 'Growth & Expansion',
      description: 'Expanded operations in industrial and hazardous waste transportation services',
      companies: [],
      icon: <LocalShipping sx={{ color: 'white' }} />,
      color: 'primary.light',
    },
    {
      year: '2014',
      title: 'Official Foundation',
      description: 'Petrotreatment was officially founded in May 2014, consolidating decades of experience',
      companies: [],
      icon: <HistoryIcon sx={{ color: 'white' }} />,
      color: 'primary.main',
    },
    {
      year: '2014+',
      title: 'Strategic Partnerships',
      description: 'Established partnerships with major oil firms including Petrobel in the Zohr gas field',
      companies: [],
      icon: <Engineering sx={{ color: 'white' }} />,
      color: 'primary.dark',
    },
    {
      year: 'Present',
      title: 'Environmental Leadership',
      description: 'Leading provider of comprehensive oil and waste management solutions',
      companies: [],
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
            Our History
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
            Building on decades of experience to become a leader in oil and waste management services
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
                  Our Journey
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  <strong>Petrotreatment was officially founded in May 2014</strong>, building on the 
                  experience and activities of several sister companies operating since 1996.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  These pioneering companies include <strong>Petroleum Services</strong>, 
                  <strong> Al Masrya Transport Company</strong>, and 
                  <strong> Al Assrya for Petroleum and Environmental Services Company</strong> - 
                  all focused on waste transport and environmental services.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  The founder's journey began with transporting industrial and hazardous waste 
                  and expanded through strategic partnerships with major oil firms like 
                  <strong> Petrobel in the Zohr gas field</strong>.
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
                    Years of Combined Experience
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      opacity: 0.8,
                    }}
                  >
                    Since 1996
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