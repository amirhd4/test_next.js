import { Box, Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

import PillButton from '../common/PillButton';
import SectionTitle from '../common/SectionTitle';

type TextImageSectionProps = {
  title: string;
  text: string;
  cta?: string;
  icon?: ReactNode;
  media?: ReactNode;
  images?: {
    top: string;
    left: string;
    right: string;
  };
};

export default function TextImageSection({
  title,
  text,
  cta,
  icon,
  media,
  images,
}: TextImageSectionProps) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: {
          xs: 5,
          md: 10,
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
          },
          gap: {
            xs: 5,
            md: 8,
          },
          alignItems: 'center',
          direction: 'rtl',
        }}
      >
        <Box>
          <Stack spacing={2.5} alignItems="flex-start">
            <SectionTitle title={title} icon={icon} align="start" />

            <Typography
              variant="body2"
              sx={{
                lineHeight: 2,
                color: 'text.secondary',
              }}
            >
              {text}
            </Typography>

            {cta && (
              <PillButton
                icon={<img src="/icons/Button%20Background.svg" alt="" />}
                iconPosition="left"
                iconSize={40}
              >
                {cta}
              </PillButton>
            )}
          </Stack>
        </Box>

        <Box sx={{ width: '100%', minWidth: 0 }}>
          {media ? (
            media
          ) : (
            <Box
              sx={{
                direction: 'ltr',
                position: 'relative',
                width: '100%',
                maxWidth: 650,
                height: { xs: 450, md: 560 },
                mx: 'auto',
              }}
            >
              <Box
                component="img"
                src={images?.top}
                alt=""
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: 250, md: 400 },
                  height: { xs: 280, md: 400 },
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: '4px solid white',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  zIndex: 2,
                }}
              />
              <Box
                component="img"
                src={images?.left}
                alt=""
                sx={{
                  position: 'absolute',
                  left: { xs: 0, md: 20 },
                  bottom: 0,
                  width: { xs: 220, md: 320 },
                  height: { xs: 270, md: 350 },
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: '4px solid white',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  zIndex: 3,
                }}
              />
              <Box
                component="img"
                src={images?.right}
                alt=""
                sx={{
                  position: 'absolute',
                  right: { xs: 0, md: 10 },
                  bottom: -20,
                  width: { xs: 210, md: 300 },
                  height: { xs: 300, md: 390 },
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: '4px solid white',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  zIndex: 1,
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}