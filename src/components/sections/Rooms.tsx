'use client';

import { useState } from 'react';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SectionTitle from '../common/SectionTitle';
import ImageBox from '../common/ImageBox';
import {intro, intro3} from '@/data/content';

const roomTypes = [
  {
    id: 1,
    title: 'خانه‌ی چوبی گیلمار',
    capacity: 'ظرفیت ۲ تا ۴ نفر',
    price: '۲,۰۰۰,۰۰۰ تومان',
    period: 'هر شب اقامت',
    badge: 'محبوب‌ترین',
    image: '/images/rooms/room1.jpg',
  },
  {
    id: 2,
    title: 'سوئیت دوبلکس گیلمار',
    capacity: 'ظرفیت ۴ تا ۶ نفر',
    price: '۳,۲۰۰,۰۰۰ تومان',
    period: 'هر شب اقامت',
    badge: 'ویژه خانواده',
    image: '/images/rooms/room2.jpg',
  },
  {
    id: 3,
    title: 'کلبه جنگلی گیلمار',
    capacity: 'ظرفیت ۲ نفر',
    price: '۲,۵۰۰,۰۰۰ تومان',
    period: 'هر شب اقامت',
    badge: 'ارامش مطلق',
    image: '/images/rooms/room3.jpg',
  },
  {
    id: 4,
    title: 'ویلای اختصاصی استخردار',
    capacity: 'ظرفیت تا ۸ نفر',
    price: '۵,۵۰۰,۰۰۰ تومان',
    period: 'هر شب اقامت',
    badge: 'لوکس',
    image: '/images/rooms/room4.jpg',
  },
];

export default function Rooms() {
  const [activeRoom, setActiveRoom] = useState<number | null>(null);

  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>
      <SectionTitle
        title="انواع اتاق‌های اقامتگاه گیلمار"
        icon={<img src="/icons/Icon%20Container4.svg" alt="" />}
        subtitle={intro3}
      />
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {roomTypes.map((r) => (
          <Grid key={r.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ImageBox
              src={r.image}
              ratio="3 / 4"
              onMouseEnter={() => setActiveRoom(r.id)}
              onMouseLeave={() => setActiveRoom(null)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2.5,
                color: '#fff',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: activeRoom === r.id ? 'translateY(-6px)' : 'none',
                boxShadow:
                  activeRoom === r.id
                    ? '0 24px 48px rgba(31,41,55,.25)'
                    : '0 16px 32px rgba(31,41,55,.12)',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Chip
                  label={r.badge}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    color: 'text.primary',
                    fontWeight: 700,
                    fontSize: 11,
                  }}
                />
              </Box>

              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: 12 }}>
                  {r.capacity}
                </Typography>
                <Typography fontWeight={700} fontSize={16}>
                  {r.title}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  {r.price} / {r.period}
                </Typography>
              </Stack>
            </ImageBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
