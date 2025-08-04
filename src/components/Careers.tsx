import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import {
  Search,
  Work,
  LocationOn,
  Schedule,
  Business,
  AttachFile,
  Close,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  cv: File | null;
  message: string;
}

const Careers: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    cv: null,
    message: '',
  });

  const jobs: Job[] = [];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleApplyClick = () => {
    setShowApplication(true);
  };

  const handleCloseApplication = () => {
    setShowApplication(false);
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      cv: null,
      message: '',
    });
  };

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setApplicationData(prev => ({
      ...prev,
      cv: file,
    }));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to your backend
    setShowApplication(false);
    setShowSuccess(true);
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      cv: null,
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Box id="careers" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              mb: 2,
              display: 'block',
            }}
          >
            {t('careers.header.subtitle')}
          </Typography>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2,
            }}
          >
            {t('careers.header.title')}
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
            {t('careers.header.description')}
          </Typography>
        </Box>

        {/* Search Section */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            placeholder={t('careers.search.placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: 600,
              mx: 'auto',
              display: 'block',
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
              },
            }}
          />
        </Box>

        {/* Success Alert */}
        {showSuccess && (
          <Alert severity="success" sx={{ mb: 4 }}>
            {t('careers.application.success')}
          </Alert>
        )}

        {/* Jobs Grid */}
        <Grid container spacing={4}>
          {filteredJobs.map((job) => (
            <Grid item xs={12} md={6} key={job.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
                onClick={() => handleJobClick(job)}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                    <Work sx={{ color: 'primary.main', fontSize: 32, mt: 0.5 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          mb: 1,
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {job.department}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Schedule sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.type}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Business sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.experience}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {job.description}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 'bold',
                      borderRadius: 2,
                    }}
                  >
                    {t('careers.buttons.viewDetails')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* No Jobs Available */}
        {jobs.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Work sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              {t('careers.noPositions.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('careers.noPositions.message')}
            </Typography>
          </Box>
        )}

        {/* No Search Results (only shown when there are jobs but none match search) */}
        {jobs.length > 0 && filteredJobs.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Work sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              {t('careers.search.noResults')}
            </Typography>
          </Box>
        )}

        {/* Job Details Dialog */}
        {selectedJob && (
          <Dialog
            open={Boolean(selectedJob)}
            onClose={() => setSelectedJob(null)}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: { borderRadius: 3 }
            }}
          >
            <DialogTitle sx={{ pb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {selectedJob.title}
                  </Typography>
                  <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                    {selectedJob.department}
                  </Typography>
                </Box>
                <Button
                  onClick={() => setSelectedJob(null)}
                  sx={{ minWidth: 'auto', p: 1 }}
                >
                  <Close />
                </Button>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Chip
                      icon={<LocationOn />}
                      label={selectedJob.location}
                      variant="outlined"
                      sx={{ width: '100%', justifyContent: 'flex-start' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Chip
                      icon={<Schedule />}
                      label={selectedJob.type}
                      variant="outlined"
                      sx={{ width: '100%', justifyContent: 'flex-start' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Chip
                      icon={<Business />}
                      label={selectedJob.experience}
                      variant="outlined"
                      sx={{ width: '100%', justifyContent: 'flex-start' }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('careers.details.description')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                {selectedJob.description}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('careers.details.responsibilities')}
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                {selectedJob.responsibilities.map((resp, index) => (
                  <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                    {resp}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('careers.details.requirements')}
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                {selectedJob.requirements.map((req, index) => (
                  <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                    {req}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('careers.details.benefits')}
              </Typography>
              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                {selectedJob.benefits.map((benefit, index) => (
                  <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                    {benefit}
                  </Typography>
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button
                onClick={() => setSelectedJob(null)}
                sx={{ mr: 2 }}
              >
                {t('careers.buttons.close')}
              </Button>
              <Button
                variant="contained"
                onClick={handleApplyClick}
                sx={{ px: 4 }}
              >
                {t('careers.buttons.apply')}
              </Button>
            </DialogActions>
          </Dialog>
        )}

        {/* Application Dialog */}
        <Dialog
          open={showApplication}
          onClose={handleCloseApplication}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3 }
          }}
        >
          <DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                {t('careers.application.title')}
              </Typography>
              <Button
                onClick={handleCloseApplication}
                sx={{ minWidth: 'auto', p: 1 }}
              >
                <Close />
              </Button>
            </Box>
            {selectedJob && (
              <Typography variant="subtitle1" color="primary.main">
                {selectedJob.title}
              </Typography>
            )}
          </DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSubmitApplication} sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('careers.application.firstName')}
                    value={applicationData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('careers.application.lastName')}
                    value={applicationData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('careers.application.email')}
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{
                      py: 2,
                      borderStyle: 'dashed',
                      textTransform: 'none',
                    }}
                    startIcon={<AttachFile />}
                  >
                    {applicationData.cv
                      ? applicationData.cv.name
                      : t('careers.application.cvUpload')
                    }
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('careers.application.message')}
                    multiline
                    rows={4}
                    value={applicationData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('careers.application.messagePlaceholder')}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button
              onClick={handleCloseApplication}
              sx={{ mr: 2 }}
            >
              {t('careers.buttons.cancel')}
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmitApplication}
              sx={{ px: 4 }}
            >
              {t('careers.buttons.submit')}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Careers;