'use client';
import { useState } from 'react';
import { Avatar, Box, Container, MobileStepper, Paper, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { intro } from '@/data/content';

const items = Array.from({ length: 4 }, (_, i) => ({ name: 'احسان عبدی‌پور', role: 'مهمان', text: intro, id: i }));

export default function Testimonials() {
  const [step, setStep] = useState(0);
  const t = items[step];
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <SectionTitle title="گیلمار از نگاه مهمانان" subtitle="تجربه رفاهی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است." />
      <Box sx={{ position: 'relative', mt: 5, display: 'grid', placeItems: 'center' }}>
        <Paper elevation={0} sx={{ p: 4, maxWidth: 520, textAlign: 'center', boxShadow: '0 20px 40px rgba(31,41,55,.1)' }}>
          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>{t.name[0]}</Avatar>
          <Typography variant="body2" mb={2}>{t.text}</Typography>
          <Typography fontWeight={700}>{t.name}</Typography>
          <Typography variant="caption" color="text.secondary">{t.role}</Typography>
          <MobileStepper variant="dots" steps={items.length} activeStep={step} position="static" backButton={null} nextButton={null} sx={{ justifyContent: 'center', bgcolor: 'transparent' }} onClick={() => setStep((s) => (s + 1) % items.length)} />
        </Paper>
      </Box>
    </Container>
  );
}
