import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PillButton from '../common/PillButton';
import SectionTitle from '../common/SectionTitle';
import { intro4 } from '@/data/content';

export default function VideoBlock() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: 500, md: 550 },
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundImage: `url('/images/forest-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '20%', md: '25%' },
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
          }}
        >
          <IconButton
            aria-label="پخش ویدیو"
            sx={{
              width: { xs: 64, md: 80 },
              height: { xs: 64, md: 80 },
              bgcolor: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.4)',
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
            width: 'auto',
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
            p: { xs: 3, md: 6 },
            direction: 'rtl',
            ml: 'auto',
          }}
        >
          <Stack spacing={2.5} alignItems="flex-start">
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
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              تور ویدیویی اقامتگاه گیلمار
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                color: '#6b7280',
                fontSize: { xs: '0.9rem', md: '0.95rem' },
              }}
            >
              {intro4}
            </Typography>

            <PillButton
              icon={<img src="/icons/Button Background.svg" />}
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
            position: 'absolute',
            bottom: 20,
            right: '35%',
            width: { xs: 50, md: 134 },
            height: { xs: 50, md: 134 },
            opacity: 0.8,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Container>
  );
}