import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = React.memo(() => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { key: 'Home', label: t('navigation.home') },
    { key: 'About', label: t('navigation.about') },
    { key: 'Services', label: t('navigation.services') },
    { key: 'Projects', label: t('navigation.projects') },
    { key: 'Clients', label: t('navigation.clients') },
    { key: 'Contact', label: t('navigation.contact') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <img
          src="/logo.png"
          alt="Petrotreatment Logo"
          style={{
            height: '60px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
        <Typography variant="h6" sx={{ color: '#1B4B8C', fontWeight: 'bold' }}>
          PETROTREATMENT
        </Typography>
      </Box>
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.key} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              onClick={() => scrollToSection(item.key)}
              sx={{ 
                justifyContent: 'center',
                py: 2,
                color: '#1B4B8C',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#1B4B8C',
                  color: 'white',
                },
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  '& .MuiListItemText-primary': { 
                    fontWeight: 'inherit' 
                  } 
                }} 
              />
            </Button>
          </ListItem>
        ))}
      </List>
      {/* <Box sx={{ px: 2, mt: 2 }}>
        <LanguageSwitcher />
      </Box> */}
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              gap: 2,
            }}
            onClick={() => scrollToSection('Home')}
          >
            <img
              src="/logo.png"
              alt="Petrotreatment Logo"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: '#1B4B8C',
                letterSpacing: 1,
              }}
            >
              PETROTREATMENT
            </Typography>
          </Box>
          
          {isMobile ? (
            <IconButton
              sx={{ color: '#1B4B8C' }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  sx={{
                    color: '#1B4B8C',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      backgroundColor: '#1B4B8C',
                      color: 'white',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {/* <Box sx={{ ml: 2 }}>
                <LanguageSwitcher />
              </Box> */}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
});

Header.displayName = 'Header';

export default Header;