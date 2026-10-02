import { Container, Stack, Typography, Box, AvatarGroup, Avatar } from '@mui/material';
import PillButton from '../common/PillButton';
import { intro } from '@/data/content';

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack alignItems="center" spacing={3} textAlign="center">
        {/* عنوان اصلی */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.75rem' },
            fontWeight: 800,
            color: '#1E293B'
          }}
        >
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </Typography>

        {/* متن زیر عنوان */}
        <Typography
          variant="body1"
          maxWidth={720}
          sx={{ color: '#64748B', lineHeight: 1.8 }}
        >
          {intro}
        </Typography>

        {/* دکمه اصلی هیرو */}
        <PillButton
              icon={<img src="/icons/Button%20Background.svg" alt="" />}
              iconPosition="left"
              iconSize={40}
            >
              میهمان گیلمار شو
        </PillButton>

        {/* بخش بنر و کارت‌های شناور روی تصویر */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            mt: { xs: 4, md: 6 },
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {/* تصویر اصلی هیرو (شامل ساختمان و درختانی که از کادر بیرون زده‌اند) */}
          <Box
            component="img"
            src="/images/hero.png"
            alt="اقامتگاه بوم‌گردی گیلمار"
            sx={{
              width: '100%',
              maxHeight: { xs: 350, md: 520 },
              objectFit: 'cover',
              borderRadius: '24px',
            }}
          />

          {/* کارت سمت راست پایین: متن توصیفی */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: -20, md: -10 },
              left: { xs: 16, md: 4 },
              borderRadius: '18px',
              p: { xs: 2, md: 2.5 },
              textAlign: 'left',
              maxWidth: { xs: 220, md: 280 },
              zIndex: 2
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155', fontSize: { xs: '0.8rem', md: '0.95rem' } }}>
              فرار از شلوغی شهر و تجربه ی اقامتی اصیل
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.5 }}>
              در دل طبیعت شمال
            </Typography>
          </Box>

          {/* کارت سمت چپ پایین: آمار رزروهای موفق */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 16, md: 15 },
              right: { xs: 16, md: -35 },
              borderRadius: '50px',
              px: { xs: 2, md: 2.5 },
              py: { xs: 1, md: 1.2 },
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              zIndex: 2
            }}
          >
            <AvatarGroup
              max={3}
              sx={{
                '& .MuiAvatar-root': { width: 26, height: 26, fontSize: 12 }
              }}
            >
              <Avatar alt="User 1" src="/images/avatars/user1.png" />
              <Avatar alt="User 2" src="/images/avatars/user2.png" />
              <Avatar alt="User 3" src="/images/avatars/user3.png" />
            </AvatarGroup>

            <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B', fontSize: { xs: '0.75rem', md: '14px' } }}>
              ۱۲۰+ رزرو موفق
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}