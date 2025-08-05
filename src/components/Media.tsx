import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import {
  Article,
  Facebook,
  Language,
  OpenInNew,
  PlayCircleOutline,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface MediaItem {
  id: number;
  title: string;
  url: string;
  source: string;
  type: 'news' | 'social' | 'video';
  icon: React.ReactElement;
  embedId?: string;
}

const Media: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const mediaItems: MediaItem[] = [
    {
      id: 0,
      title: t('media.items.0.title'),
      url: 'https://youtu.be/jrE6JMMHuWo?feature=shared',
      source: t('media.items.0.source'),
      type: 'video',
      icon: <PlayCircleOutline sx={{ fontSize: 20 }} />,
      embedId: 'jrE6JMMHuWo',
    },
    {
      id: 1,
      title: t('media.items.1.title'),
      url: 'https://mped.gov.eg/singlenews?id=5545&lang=ar',
      source: t('media.items.1.source'),
      type: 'news',
      icon: <Language sx={{ fontSize: 20 }} />,
    },
    {
      id: 2,
      title: t('media.items.2.title'),
      url: 'https://www.facebook.com/share/p/dEsmnDuByUCcX6SF/?mibextid=qi2Omg',
      source: t('media.items.2.source'),
      type: 'social',
      icon: <Facebook sx={{ fontSize: 20 }} />,
    },
    {
      id: 3,
      title: t('media.items.3.title'),
      url: 'https://www.facebook.com/share/p/yd8jtfJKUc1WCWjH/?mibextid=qi2Omg',
      source: t('media.items.3.source'),
      type: 'social',
      icon: <Facebook sx={{ fontSize: 20 }} />,
    },
    {
      id: 4,
      title: t('media.items.4.title'),
      url: 'https://almalnews.com/%d8%a8%d8%aa%d8%b1%d9%88%d8%aa%d8%b1%d9%8a%d8%aa%d9%85%d9%86%d8%aa-%d9%84%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%aa%d8%b1%d9%88%d9%84%d9%8a%d8%a9-%d8%aa%d9%81%d9%88/',
      source: t('media.items.4.source'),
      type: 'news',
      icon: <Article sx={{ fontSize: 20 }} />,
    },
    {
      id: 5,
      title: t('media.items.5.title'),
      url: 'https://www.facebook.com/share/p/n1TiBeG8W51kTQT2/',
      source: t('media.items.5.source'),
      type: 'social',
      icon: <Facebook sx={{ fontSize: 20 }} />,
    },
    {
      id: 6,
      title: t('media.items.6.title'),
      url: 'https://almalnews.com/%d9%85%d8%ad%d8%a7%d9%81%d8%b8-%d8%a7%d9%84%d8%a5%d8%b3%d9%85%d8%a7%d8%b9%d9%8a%d9%84%d9%8a%d8%a9-%d9%8a%d9%8f%d9%83%d8%b1%d9%90%d9%91%d9%85-%d8%a7%d9%84%d9%81%d8%a7%d8%a6%d8%b2%d9%8a%d9%86-%d9%81/',
      source: t('media.items.6.source'),
      type: 'news',
      icon: <Article sx={{ fontSize: 20 }} />,
    },
  ];

  return (
    <Box id="media" sx={{ py: 10, backgroundColor: 'background.paper' }}>
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
            {t('media.title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {t('media.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {mediaItems.map((item) => (
            <Grid item xs={12} md={item.type === 'video' ? 12 : 6} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                    borderColor: 'primary.light',
                  },
                }}
              >
                {item.type === 'video' && item.embedId && (
                  <Box
                    sx={{
                      position: 'relative',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      height: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${item.embedId}`}
                      title={item.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Chip
                      icon={item.icon}
                      label={
                        item.type === 'news' 
                          ? t('media.newsLabel') 
                          : item.type === 'video' 
                          ? t('media.videoLabel')
                          : t('media.socialLabel')
                      }
                      size="small"
                      sx={{
                        backgroundColor: 
                          item.type === 'news' 
                            ? 'primary.light' 
                            : item.type === 'video'
                            ? 'warning.light'
                            : 'secondary.light',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        height: 28,
                        '& .MuiChip-icon': {
                          fontSize: 16,
                          ml: 0.5,
                          color: 'white',
                        },
                        borderRadius: 2,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: 'text.primary',
                      mb: 2,
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      fontWeight: 500,
                    }}
                  >
                    {t('media.source')}: {item.source}
                  </Typography>

                  <Button
                    variant="outlined"
                    endIcon={<OpenInNew />}
                    onClick={() => window.open(item.url, '_blank')}
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'primary.light',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {t('media.readMore')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Media;