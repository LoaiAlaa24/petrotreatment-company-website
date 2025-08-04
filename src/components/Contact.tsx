import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('contact.info.phone.title'),
      content: '+20 11 1212 12 94',
      subtitle: t('contact.info.phone.subtitle'),
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('contact.info.phone.title'),
      content: '+20 10 12345 1 67',
      subtitle: t('contact.info.phone.subtitle'),
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('contact.info.phone.title'),
      content: '+20 10 100 160 4 667',
      subtitle: t('contact.info.phone.subtitle'),
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      subtitle: t('contact.info.email.subtitle'),
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('contact.info.location.title'),
      content: t('contact.info.location.content'),
      subtitle: t('contact.info.location.subtitle'),
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
      subtitle: t('contact.info.hours.subtitle'),
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'white' }}>
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
            {t('contact.title')}
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
            {t('contact.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {info.icon}
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
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      mb: 1,
                      ...((index === 0 || index === 1 || index === 2) && {
                        direction: 'ltr',
                        textAlign: 'center',
                        fontFamily: 'monospace',
                        unicodeBidi: 'embed',
                      }),
                    }}
                  >
                    {info.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {info.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6}>
          {/* Contact Form - Temporarily Commented Out */}
          {/* <Grid item xs={12} md={8}>
            <Card sx={{ p: 4 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Send us a Message
              </Typography>
              
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t('contact.form.companyLabel')}
                      name="company"
                      value={formData.company"
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid> */}
          {/* <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Why Choose Petrotreatment?
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Expert Team
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Industry professionals with decades of experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Professional Support
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Comprehensive service support and assistance
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Proven Results
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Track record of successful projects and satisfied clients
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Environmental Focus
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Sustainable solutions that protect the environment
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid> */}
        </Grid>

        {/* Google Maps Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 3,
              textAlign: 'center',
            }}
          >
            {t('contact.headquarters.title')}
          </Typography>
          <Card
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: theme.shadows[8],
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                position: 'relative',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.234!2d31.24703818939568!3d30.004764066992532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839d6c3f5b5f1%3A0x1234567890abcdef!2sPetrotreatment%20For%20Petroleum%20and%20Environmental%20Services!5e0!3m2!1sen!2sus!4v1704307200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Petrotreatment Cairo Office Location"
              />
            </Box>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <LocationOn sx={{ color: 'primary.main', fontSize: 24, mt: 0.5 }} />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          mb: 1,
                        }}
                      >
                        {t('contact.headquarters.location')}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {t('contact.headquarters.address').split('\n').map((line: string, index: number) => (
                          <React.Fragment key={index}>
                            {line}
                            {index < t('contact.headquarters.address').split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
          
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                    <Button
                      variant="outlined"
                      startIcon={<LocationOn />}
                      href="https://maps.app.goo.gl/5wmYWVudGL2NroEY6"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        px: 3,
                        py: 1.5,
                        fontWeight: 600,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      {t('contact.headquarters.openMaps')}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;