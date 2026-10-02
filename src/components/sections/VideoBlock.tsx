'use client';

import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PillButton from '../common/PillButton';
import { intro4 } from '@/data/content';

export default function VideoBlock() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: 520, md: 550 },
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundImage: `url('/images/forest-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '50%', md: '25%' },
            top: { xs: '28%', md: '50%' },
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
          }}
        >
          <IconButton
            aria-label="پخش ویدیو"
            sx={{
              width: { xs: 64, md: 80 },
              height: { xs: 64, md: 80 },
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: { xs: 44, md: 56 },
                height: { xs: 44, md: 56 },
                borderRadius: '50%',
                bgcolor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlayArrowIcon sx={{ color: '#10b981', fontSize: { xs: 28, md: 36 } }} />
            </Box>
          </IconButton>
        </Box>

        <Box
          component="img"
          src="/images/map-shape.svg"
          alt=""
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: { xs: '100%', md: 'auto' },
            maxHeight: '100%',
            objectFit: 'cover',
            objectPosition: 'right',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: '100%', md: '50%' },
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: { xs: '100%', md: '45%' },
            p: { xs: 3, sm: 4, md: 6 },
            mt: { xs: 'auto', md: 0 }, // متصل شدن به پایین در موبایل
            direction: 'rtl',
            ml: 'auto',
            bgcolor: { xs: 'rgba(255, 255, 255, 0.92)', md: 'transparent' }, // پس‌زمینه روشن در موبایل جهت خوانایی
            backdropFilter: { xs: 'blur(8px)', md: 'none' },
            borderTopLeftRadius: { xs: '24px', md: 0 },
            borderTopRightRadius: { xs: '24px', md: 0 },
          }}
        >
          <Stack spacing={2} alignItems="flex-start">
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                bgcolor: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/icons/badge-icon.svg" alt="" width={84} height={52} />
            </Box>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                color: '#1f2937',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              }}
            >
              تور ویدیویی اقامتگاه گیلمار
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: '#4b5563',
                fontSize: { xs: '0.85rem', md: '0.95rem' },
              }}
            >
              {intro4}
            </Typography>

            <PillButton
              icon={<img src="/icons/Button Background.svg" alt="" />}
              sx={{
                bgcolor: '#10b981',
                color: '#fff',
                borderRadius: '50px',
                px: 3,
                py: 1,
                '&:hover': { bgcolor: '#059669' },
              }}
            >
              اقامت در گیلمار
            </PillButton>
          </Stack>
        </Box>

        <Box
          component="img"
          src="/icons/compass.svg"
          alt="Compass"
          sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'absolute',
            bottom: 20,
            right: { sm: '45%', md: '35%' },
            width: { sm: 80, md: 134 },
            height: { sm: 80, md: 134 },
            opacity: 0.8,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Container>
  );
}