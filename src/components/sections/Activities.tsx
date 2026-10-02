'use client';

import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const activitiesData = [
  { id: 1, title: 'پرنده نگری', image: '/images/bird-watching.jpg' },
  { id: 2, title: 'قایق سواری', image: '/images/boating.jpg' },
  { id: 3, title: 'دوچرخه سواری', image: '/images/cycling.jpg' },
];

export default function Activities() {
  // استفاده از useState به‌جای useRef برای حل مشکل عدم شناسایی دکمه‌ها در Swiper
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <Box sx={{ position: 'relative', width: '100%', py: 2, direction: 'rtl' }}>

      <IconButton
        ref={(node) => setPrevEl(node)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: 0, md: -20 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#26d0a8',
          color: '#fff',
          boxShadow: '0 4px 14px rgba(38, 208, 168, 0.4)',
          width: { xs: 38, md: 46 },
          height: { xs: 38, md: 46 },
          '&:hover': { backgroundColor: '#1fb894' },
          '&.swiper-button-disabled': { opacity: 0.3, cursor: 'not-allowed' },
        }}
      >
        <img src="/icons/arrow-right.svg" alt="Previous" style={{ width: 46, height: 46, transform: 'rotate(180deg)' }} />
      </IconButton>

      <IconButton
        ref={(node) => setNextEl(node)}
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: 0, md: -20 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#26d0a8',
          color: '#fff',
          boxShadow: '0 4px 14px rgba(38, 208, 168, 0.4)',
          width: { xs: 38, md: 46 },
          height: { xs: 38, md: 46 },
          '&:hover': { backgroundColor: '#1fb894' },
          '&.swiper-button-disabled': { opacity: 0.3, cursor: 'not-allowed' },
        }}
      >
        <img src="/icons/arrow-right.svg" alt="Next" style={{ width: 46, height: 46 }} />
      </IconButton>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{ prevEl, nextEl }}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 12 },
          600: { slidesPerView: 2.1, spaceBetween: 16 },
          900: { slidesPerView: 2.3, spaceBetween: 20 },
        }}
        style={{ padding: '10px 8px' }}
      >
        {activitiesData.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 240, sm: 280, md: 320 },
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}