import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import './i18n/i18n';

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer],
});

const createAppTheme = (isRTL: boolean) => createTheme({
  direction: isRTL ? 'rtl' : 'ltr',
  palette: {
    primary: {
      main: '#1B4B8C', // Deep petroleum blue
      dark: '#0F2A4C',
      light: '#3366B3',
    },
    secondary: {
      main: '#2E7D32', // Environmental green
      dark: '#1B5E20',
      light: '#4CAF50',
    },
    success: {
      main: '#2E7D32', // Green for environmental focus
      dark: '#1B5E20',
      light: '#4CAF50',
    },
    warning: {
      main: '#F57C00', // Oil/energy orange
      dark: '#E65100',
      light: '#FF9800',
    },
    background: {
      default: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: isRTL 
      ? '"Cairo", "Tajawal", "Almarai", "Roboto", "Helvetica", "Arial", sans-serif'
      : '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@import': isRTL ? "url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;600;700&display=swap')" : undefined,
      },
    },
  },
});

function App() {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [theme, setTheme] = useState(() => createAppTheme(i18n.language === 'ar'));

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const newIsRTL = lng === 'ar';
      setIsRTL(newIsRTL);
      setTheme(createAppTheme(newIsRTL));
      document.documentElement.dir = newIsRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
    };

    i18n.on('languageChanged', handleLanguageChange);
    handleLanguageChange(i18n.language);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <CacheProvider value={isRTL ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;