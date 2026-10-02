'use client';

import { useState } from 'react';
import {Box, Container, Paper, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import PillButton from '../common/PillButton';
import SectionTitle from "@/components/common/SectionTitle";

// داده‌های پکیج‌ها
const packages = [
  {
    id: 1,
    title: 'پکیج رمانتیک دو نفره',
    description: 'شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری',
    price: '۲,۳۰۰,۰۰۰ تومان',
    images: [
      '/images/rooms/room1.jpg',
      '/images/rooms/room2.jpg',
      '/images/rooms/room3.jpg',
      '/images/rooms/room4.jpg',
    ],
    features: [
      { id: 1, title: '۱ شب اقامت', icon: '/icons/tent.png' },
      { id: 2, title: 'صبحانه', icon: '/icons/breakfast.png' },
      { id: 3, title: 'قایق سواری', icon: '/icons/boat.png' },
      { id: 4, title: 'تور جنگل نوردی', icon: '/icons/mountain.png' },
    ],
  },
  {
    id: 2,
    title: 'پکیج خانوادگی گیلمار',
    description: 'شامل: ۲ شب اقامت + تمام وعده‌های غذایی + تور کامل گیلان‌گردی',
    price: '۴,۵۰۰,۰۰۰ تومان',
    images: [
      '/images/packages/family-1.jpg',
      '/images/packages/family-2.jpg',
    ],
    features: [
      { id: 1, title: '۲ شب اقامت', icon: '/icons/tent.png' },
      { id: 2, title: 'پذیرایی کامل', icon: '/icons/breakfast.png' },
      { id: 3, title: 'قایق سواری', icon: '/icons/boat.png' },
      { id: 4, title: 'گشت شهری', icon: '/icons/mountain.png' },
    ],
  },
];

export default function Package() {
  const [activePackageIndex, setActivePackageIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentPackage = packages[activePackageIndex];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#F8FAFC', direction: 'rtl' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* ---------------- سمت راست: بخش متنی و اطلاعات ---------------- */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} alignItems="flex-start">
              <Box>

                <SectionTitle title={"پکیج‌های ویژه اقامت در گیلمار"} icon={<img src="/icons/Icon%20Container2.svg" />} align="start" />

                
                <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.95rem' }}>
                  پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است.
                </Typography>
              </Box>

              <Box sx={{ pt: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                  {currentPackage.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280' }}>
                  {currentPackage.description}
                </Typography>
              </Box>

              <Grid container spacing={1.5} width="100%">
                {currentPackage.features.map((feature) => (
                  <Grid key={feature.id} size={{ xs: 6, sm: 3 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        borderRadius: '16px',
                        bgcolor: '#FFFFFF',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        border: '1px solid #F1F5F9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        height: 100,
                      }}
                    >
                      <Box
                        component="img"
                        src={feature.icon}
                        alt={feature.title}
                        sx={{ width: 36, height: 36, objectFit: 'contain' }}
                      />
                      <Typography
                        fontSize={12}
                        fontWeight={600}
                        sx={{ color: '#334155', whiteSpace: 'nowrap' }}
                      >
                        {feature.title}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* دکمه رزرو و قیمت */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                sx={{ pt: 2 }}
              >
                <PillButton
                  icon={<img src="/icons/Button%20Background.svg" />}
                  sx={{
                    bgcolor: '#00C897',
                    color: '#fff',
                    px: 3.5,
                    py: 1.2,
                    borderRadius: '50px',
                    '&:hover': { bgcolor: '#00B084' },
                  }}
                >
                  همین حالا رزرو کن
                </PillButton>

                <Typography variant="body1" sx={{ fontWeight: 700, color: '#1F2937' }}>
                  قیمت:{' '}
                  <Box component="span" sx={{ color: '#00C897', fontWeight: 800 }}>
                    {currentPackage.price}
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* ---------------- سمت چپ: تصویر و بریدگی‌های خاص فیگما ---------------- */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 480,
                height: { xs: 420, md: 520 },
                mx: 'auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              }}
            >
              {/* عکس اصلی کلبه/طبیعت */}
              <Box
                component="img"
                src={currentPackage.images[activeImageIndex]}
                alt={currentPackage.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease-in-out',
                }}
              />

              {/* ۱. بریدگی/باکس سفید بالای سمت چپ عکس (برش شکل فیگما) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 140,
                  height: 100,
                  bgcolor: '#F8FAFC', // هم‌رنگ پس‌زمینه اصلی برای ایجاد حس بریدگی
                  borderBottomRightRadius: '20px',
                  zIndex: 2,
                }}
              />

              {/* کارت سفید شناور متنی روی بریدگی بالا */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 15,
                  left: 15,
                  maxWidth: 120,
                  p: 1.5,
                  bgcolor: '#FFFFFF',
                  borderRadius: '14px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  zIndex: 3,
                }}
              >
                <Typography fontSize={11} fontWeight={700} sx={{ color: '#1E293B', lineHeight: 1.5 }}>
                  تجربه اقامتی اصیل در دل طبیعت شمال
                </Typography>
              </Box>

              {/* ۲. بریدگی/باکس سفید بالایی وسط-راست */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 80,
                  width: 60,
                  height: 60,
                  bgcolor: '#F8FAFC',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  zIndex: 2,
                }}
              />

              {/* ۳. بریدگی/باکس سفید پایین (دسته‌بندی برش فیگما) */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 90,
                  width: 70,
                  height: 80,
                  bgcolor: '#F8FAFC',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  zIndex: 2,
                }}
              />

              {/* خطوط اسلایدر در پایین عکس (Pagination Lines) */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  position: 'absolute',
                  bottom: 25,
                  left: 30,
                  zIndex: 3,
                }}
              >
                {currentPackage.images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    sx={{
                      width: index === activeImageIndex ? 40 : 20,
                      height: 4,
                      borderRadius: 2,
                      bgcolor: index === activeImageIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}