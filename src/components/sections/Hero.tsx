import { Container, Stack, Typography, Box, AvatarGroup, Avatar } from '@mui/material';
import PillButton from '../common/PillButton';
import { intro } from '@/data/content';

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack alignItems="center" spacing={3} textAlign="center">
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

        <Typography
          variant="body1"
          maxWidth={720}
          sx={{ color: '#64748B', lineHeight: 1.8 }}
        >
          {intro}
        </Typography>

        <PillButton
          icon={<img src="/icons/Button%20Background.svg" alt="" />}
          iconPosition="left"
          iconSize={40}
        >
          میهمان گیلمار شو
        </PillButton>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            mt: { xs: 4, md: 6 },
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            src="/images/hero.png"
            alt="اقامتگاه بوم‌گردی گیلمار"
            sx={{
              width: '100%',
              height: { xs: 280, sm: 380, md: 520 },
              objectFit: 'cover',
              borderRadius: { xs: '16px', md: '24px' },
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 12, md: 20 },
              left: { xs: 12, md: 20 },
              borderRadius: '16px',
              p: { xs: 1.5, md: 2.5 },
              textAlign: 'left',
              maxWidth: { xs: 180, sm: 220, md: 280 },
              bgcolor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
              zIndex: 2
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155', fontSize: { xs: '0.75rem', md: '0.95rem' } }}>
              فرار از شلوغی شهر و تجربه ی اقامتی اصیل
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.5, fontSize: { xs: '0.65rem', md: '0.75rem' } }}>
              در دل طبیعت شمال
            </Typography>
          </Box>


          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 12, md: 20 },
              right: { xs: 12, md: -20 },
              borderRadius: '50px',
              px: { xs: 1.5, md: 2.5 },
              py: { xs: 0.8, md: 1.2 },
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 1.5 },
              zIndex: 2
            }}
          >
            <AvatarGroup
              max={3}
              sx={{
                '& .MuiAvatar-root': {
                  width: { xs: 22, md: 26 },
                  height: { xs: 22, md: 26 },
                  fontSize: 10
                }
              }}
            >
              <Avatar alt="User 1" src="/images/avatars/user1.png" />
              <Avatar alt="User 2" src="/images/avatars/user2.png" />
              <Avatar alt="User 3" src="/images/avatars/user3.png" />
            </AvatarGroup>

            <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B', fontSize: { xs: '0.7rem', md: '14px' } }}>
              ۱۲۰+ رزرو موفق
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}