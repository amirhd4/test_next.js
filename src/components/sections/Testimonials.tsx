'use client';

import { useState } from 'react';
import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';

const items = [
  {
    id: 1,
    name: 'احسان عبدی‌پور',
    role: 'مهمان',
    text: 'اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.',
    avatar: '/images/avatars/user1.png',
    position: { top: '0%', left: '50%', transform: 'translate(-50%, -50%)', size: 70 },
  },
  {
    id: 2,
    name: 'مریم رضایی',
    role: 'مهمان',
    text: 'سکوت و زیبایی گیلمار عالی بود. امکانات کامل رفاهی و سوئیت‌های چوبی بسیار تمیز و گرم بودن حس خانگی را به انسان منتقل می‌کرد.',
    avatar: '/images/avatars/user2.png',
    position: { top: '15%', left: '18%', size: 48 },
  },
  {
    id: 3,
    name: 'علی حسینی',
    role: 'مهمان',
    text: 'قایق‌سواری و گردش در طبیعت گیلان همراه با صبحانه محلی فوق‌العاده. حتما دوباره این تجربه را تکرار خواهیم کرد.',
    avatar: '/images/avatars/user3.png',
    position: { top: '48%', left: '22%', size: 42 },
  },
  {
    id: 4,
    name: 'سارا احمدی',
    role: 'مهمان',
    text: 'رفتار پرسنل فوق‌العاده صمیمی و محترمانه بود. همه چیز دقیق و منظم برنامه‌ریزی شده بود.',
    avatar: '/images/avatars/user4.png',
    position: { top: '60%', left: '11%', size: 52 },
  },
  {
    id: 5,
    name: 'رضا کمالی',
    role: 'مهمان',
    text: 'منظره چشم‌نواز و آرامش‌بخش، تمیزی اتاق‌ها و کیفیت عالی غذاها باعث میشه حتماً دوباره برگردم.',
    avatar: '/images/avatars/user5.png',
    position: { top: '80%', left: '23%', size: 46 },
  },
  {
    id: 6,
    name: 'مینا محمدی',
    role: 'مهمان',
    text: 'بهترین جا برای ریلکس کردن و دور شدن از شلوغی. حتماً به دوستانم پیشنهاد می‌کنم.',
    avatar: '/images/avatars/user2.png',
    position: { top: '35%', right: '22%', size: 48 },
  },
  {
    id: 7,
    name: 'امیر حسین',
    role: 'مهمان',
    text: 'طبیعت بکر گیلان در کنار اقامتگاهی با تمام امکانات modern، تجربه‌ای خاطره‌انگیز ساخت.',
    avatar: '/images/avatars/user1.png',
    position: { top: '50%', right: '10%', size: 42 },
  },
  {
    id: 8,
    name: 'مهدی عباسی',
    role: 'مهمان',
    text: 'صبحانه‌های محلی و عالی با فضایی سرسبز، حس و حال بی‌نظیری به آدم می‌ده.',
    avatar: '/images/avatars/user3.png',
    position: { top: '75%', right: '17%', size: 46 },
  },
];

export default function Testimonials() {
  const [step, setStep] = useState(0);
  const current = items[step];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
        direction: 'rtl',
      }}
    >
      <Container maxWidth="lg" >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: '50%',
              bgcolor: '#E6F4F1',
              border: '1px solid #BCE3DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 28,
                bgcolor: '#00C897',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold',
              }}
            >
              <img src="/icons/Icon%20Container7.png" alt=""/>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 800, color: '#1E293B', mb: 1.5 }}
          >
            گیلمار از نگاه مهمانان
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B' }}>
            تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            maxWidth: 1200,
            mx: 'auto',
            minHeight: { xs: 'auto', md: 480 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('/images/dotted-map.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
          }}
        >
        {items.map((item, index) => {
          const isSelected = index === step;
          return (
            <Avatar
              key={item.id}
              src={item.avatar}
              alt={item.name}
              onClick={() => setStep(index)}
              sx={{
                // در موبایل نمایش داده نشود تا صفحه شلوغ و خراب نشود
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                cursor: 'pointer',
                width: isSelected ? 72 : item.position.size,
                height: isSelected ? 72 : item.position.size,
                border: isSelected ? '3px solid #00C897' : '2px solid #FFFFFF',
                boxShadow: isSelected
                  ? '0 10px 25px rgba(0, 200, 151, 0.3)'
                  : '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: isSelected ? 5 : 2,
                '&:hover': {
                  transform: `${item.position.transform || ''} scale(1.15)`,
                },
                top: item.position.top,
                left: item.position.left,
                right: item.position.right,
                transform: item.position.transform,
              }}
            />
          );
        })}
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              zIndex: 3,
              p: { xs: 3, md: 5 },
              maxWidth: 520,
              width: '100%',
              textAlign: 'center',
              borderRadius: '24px',
              bgcolor: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
            }}
          >
            {/* آیکون گیومه سبز/فیروزه‌ای */}
            <Typography
              sx={{
                fontSize: 48,
                lineHeight: 0.8,
                color: '#00C897',
                fontFamily: 'serif',
                mb: 2,
                display: 'block',
              }}
            >
              ”
            </Typography>

            {/* متن نظر */}
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                color: '#334155',
                fontSize: { xs: '0.95rem', md: '1rem' },
                mb: 3,
                minHeight: 80,
              }}
            >
              {current.text}
            </Typography>

            {/* نام و سمت */}
            <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#0F172A' }}>
              {current.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8', mt: 0.5 }}>
              {current.role}
            </Typography>
          </Paper>
        </Box>

        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
          {items.map((_, i) => (
            <Box
              key={i}
              onClick={() => setStep(i)}
              sx={{
                width: i === step ? 8 : 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: i === step ? '#00C897' : '#CBD5E1',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: i === step ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}