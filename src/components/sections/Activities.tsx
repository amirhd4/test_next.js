import React, { useRef } from 'react';
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
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box sx={{ position: 'relative', width: '100%', py: 2, direction: 'rtl' }}>
      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: -10, md: -20 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#26d0a8',
          color: '#fff',
          boxShadow: '0 4px 14px rgba(38, 208, 168, 0.4)',
          width: 46,
          height: 46,
          '&:hover': {
            backgroundColor: '#1fb894',
          },
        }}
      >
        <img src="/icons/arrow-right.svg" alt="Next" style={{ width: 46, height: 46 }} />
      </IconButton>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2.2}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          0: { slidesPerView: 1.3, spaceBetween: 12 },
          600: { slidesPerView: 2.1, spaceBetween: 16 },
          900: { slidesPerView: 2.3, spaceBetween: 20 },
        }}
        style={{ padding: '10px 5px' }}
      >
        {activitiesData.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 260, md: 320 },
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* تصویر آیتم */}
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

              {/* لایه تیرگی و عنوان پایین کارت */}
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
                    fontSize: '1rem',
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