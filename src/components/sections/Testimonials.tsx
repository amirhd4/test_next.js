'use client';

import { useState } from 'react';
import { Avatar, Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '../common/SectionTitle';

const items = [
  {
    id: 1,
    name: 'احسان عبدی‌پور',
    role: 'مهمان گیلمار',
    text: 'تجربه بسیار عالی و بی‌نظیر در گیلمار. برخورد گرم پرسنل، فضای فوق‌العاده سرسبز و آرامش‌بخش طبیعت گیلان به همراه غذاهای محلی خوشمزه، خاطره‌ای فراموش‌نشدنی برای ما ساخت.',
  },
  {
    id: 2,
    name: 'مریم رضایی',
    role: 'مهمان گیلمار',
    text: 'سکوت و زیبایی گیلمار عالی بود. امکانات کامل رفاهی و سوئیت‌های چوبی بسیار تمیز و گرم بودن حس خانگی را به انسان منتقل می‌کرد.',
  },
  {
    id: 3,
    name: 'علی حسینی',
    role: 'مهمان گیلمار',
    text: 'قایق‌سواری و گردش در طبیعت گیلان همراه با صبحانه محلی فوق‌العاده. حتما دوباره این تجربه را تکرار خواهیم کرد.',
  },
];

export default function Testimonials() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setStep((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[step];

  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <SectionTitle
        title="گیلمار از نگاه مهمانان"
        subtitle="تجربه رفاهی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است."
      />

      <Box sx={{ position: 'relative', mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            maxWidth: 640,
            width: '100%',
            textAlign: 'center',
            borderRadius: 6,
            bgcolor: '#ffffff',
            boxShadow: '0 20px 40px rgba(31,41,55,.08)',
          }}
        >
          <Avatar
            sx={{
              mx: 'auto',
              mb: 2,
              bgcolor: 'primary.main',
              width: 60,
              height: 60,
              fontSize: '1.25rem',
            }}
          >
            {current.name[0]}
          </Avatar>
          <Typography
            variant="body1"
            sx={{ lineHeight: 2, color: 'text.primary', minHeight: 76, mb: 3 }}
          >
            "{current.text}"
          </Typography>
          <Typography fontWeight={700} fontSize={18}>
            {current.name}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={3}>
            {current.role}
          </Typography>

          {/* Navigation Controls */}
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <IconButton
              onClick={handlePrev}
              size="small"
              sx={{ border: '1px solid #E5E7EB' }}
              aria-label="قبلی"
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>

            <Stack direction="row" spacing={1} alignItems="center">
              {items.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setStep(i)}
                  sx={{
                    width: i === step ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: i === step ? 'primary.main' : '#E5E7EB',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Stack>

            <IconButton
              onClick={handleNext}
              size="small"
              sx={{ border: '1px solid #E5E7EB' }}
              aria-label="بعدی"
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
