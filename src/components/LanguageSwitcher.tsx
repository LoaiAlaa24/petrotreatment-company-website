import React from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  Language,
  ExpandMore,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇪🇬' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = languageCode;
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        startIcon={<Language />}
        endIcon={<ExpandMore />}
        sx={{
          color: 'primary.main',
          fontWeight: 500,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'rgba(27, 75, 140, 0.04)',
          },
        }}
      >
        <Box component="span" sx={{ mr: 1 }}>
          {currentLanguage.flag}
        </Box>
        {currentLanguage.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 160,
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1,
            },
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === i18n.language}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(27, 75, 140, 0.08)',
                '&:hover': {
                  backgroundColor: 'rgba(27, 75, 140, 0.12)',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Box component="span" sx={{ fontSize: '1.2rem' }}>
                {language.flag}
              </Box>
            </ListItemIcon>
            <ListItemText
              primary={language.name}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: language.code === i18n.language ? 600 : 400,
                },
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;