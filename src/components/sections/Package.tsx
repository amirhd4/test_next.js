'use client';

import { useState } from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PillButton from '../common/PillButton';
import SectionTitle from "@/components/common/SectionTitle";

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
      { id: 4, title: 'تور جنگل', icon: '/icons/mountain.png' },
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

          {/* ---------------- ستون راست: تصویر و بریدگی‌های فیگما (ستون اول در DOM برای RTL) ---------------- */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 480,
                height: { xs: 320, sm: 400, md: 520 },
                mx: 'auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              }}
            >
              {/* تصویر اصلی کلبه/طبیعت */}
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

              {/* ۱. بریدگی/باکس سفید بالای سمت راست عکس */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: { xs: 120, md: 140 },
                  height: { xs: 80, md: 100 },
                  bgcolor: '#F8FAFC',
                  borderBottomLeftRadius: '20px',
                  zIndex: 2,
                }}
              />

              {/* کارت سفید شناور متنی روی بریدگی بالای راست */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  maxWidth: { xs: 100, md: 120 },
                  p: 1.2,
                  bgcolor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  zIndex: 3,
                }}
              >
                <Typography fontSize={{ xs: 9.5, md: 11 }} fontWeight={700} sx={{ color: '#1E293B', lineHeight: 1.4 }}>
                  تجربه اقامتی اصیل در دل طبیعت شمال
                </Typography>
              </Box>

              {/* ۲. بریدگی‌های تزئینی (در تبلت و دسکتاپ) */}
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  position: 'absolute',
                  top: 0,
                  left: 80,
                  width: 60,
                  height: 60,
                  bgcolor: '#F8FAFC',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  zIndex: 2,
                }}
              />
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  position: 'absolute',
                  bottom: 0,
                  left: 90,
                  width: 70,
                  height: 80,
                  bgcolor: '#F8FAFC',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  zIndex: 2,
                }}
              />

              {/* خطوط اسلایدر اسلاید عکس‌ها */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  position: 'absolute',
                  bottom: { xs: 15, md: 25 },
                  right: { xs: 20, md: 30 },
                  zIndex: 3,
                }}
              >
                {currentPackage.images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    sx={{
                      width: index === activeImageIndex ? 32 : 16,
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

          {/* ---------------- ستون چپ: اطلاعات متنی و دکمه‌ها (ستون دوم در DOM) ---------------- */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} alignItems="flex-start">
              <Box>
                <SectionTitle
                  title={"پکیج‌های ویژه اقامت در گیلمار"}
                  icon={<img src="/icons/Icon%20Container2.svg" alt="" />}
                  align="start"
                />
                <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.95rem', mt: 1 }}>
                  پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز است.
                </Typography>
              </Box>

              {/* دکمه‌های سوئیچ بین پکیج‌ها */}
              <Stack direction="row" spacing={1}>
                {packages.map((pkg, idx) => (
                  <Paper
                    key={pkg.id}
                    onClick={() => {
                      setActivePackageIndex(idx);
                      setActiveImageIndex(0);
                    }}
                    elevation={0}
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: '20px',
                      cursor: 'pointer',
                      bgcolor: activePackageIndex === idx ? '#00C897' : '#E2E8F0',
                      color: activePackageIndex === idx ? '#FFFFFF' : '#475569',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {pkg.title}
                  </Paper>
                ))}
              </Stack>

              <Box sx={{ pt: 0.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#111827', mb: 0.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  {currentPackage.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.7 }}>
                  {currentPackage.description}
                </Typography>
              </Box>

              {/* ویژگی‌ها (ایتم‌های باکس سفید) */}
              <Grid container spacing={1.5} width="100%">
                {currentPackage.features.map((feature) => (
                  <Grid key={feature.id} size={{ xs: 6, sm: 3 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        textAlign: 'center',
                        borderRadius: '16px',
                        bgcolor: '#FFFFFF',
                        border: '1px solid #F1F5F9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.8,
                        minHeight: 90,
                      }}
                    >
                      <Box
                        component="img"
                        src={feature.icon}
                        alt={feature.title}
                        sx={{ width: 30, height: 30, objectFit: 'contain' }}
                      />
                      <Typography
                        fontSize={{ xs: 11, sm: 12 }}
                        fontWeight={600}
                        sx={{ color: '#334155' }}
                      >
                        {feature.title}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* دکمه رزرو و قیمت */}
              <Stack
                direction={{ xs: 'column-reverse', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'stretch', sm: 'center' }}
                gap={2}
                width="100%"
                sx={{ pt: 1 }}
              >
                <PillButton
                  icon={<img src="/icons/Button%20Background.svg" alt="" />}
                  sx={{
                    bgcolor: '#00C897',
                    color: '#fff',
                    px: 3.5,
                    py: 1.2,
                    borderRadius: '50px',
                    justifyContent: 'center',
                    '&:hover': { bgcolor: '#00B084' },
                  }}
                >
                  همین حالا رزرو کن
                </PillButton>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    color: '#1F2937',
                    textAlign: { xs: 'center', sm: 'right' }
                  }}
                >
                  قیمت:{' '}
                  <Box component="span" sx={{ color: '#00C897', fontWeight: 800 }}>
                    {currentPackage.price}
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}