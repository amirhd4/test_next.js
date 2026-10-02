import { Box, Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

import PillButton from '../common/PillButton';
import SectionTitle from '../common/SectionTitle';
import ImageBox from '../common/ImageBox';

type TextImageSectionProps = {
  title: string;
  text: string;
  cta?: string;
  image?: string;
  icon?: ReactNode;
  media?: ReactNode;
};

export default function TextImageSection({
  title,
  text,
  cta,
  image,
  icon,
  media,
}: TextImageSectionProps) {
  return (
    <Container
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
            md: 6,
          },
          alignItems: 'center',

          direction: 'rtl',
        }}
      >
        {/* متن */}
        <Box>
          <Stack
            spacing={2.5}
            alignItems="flex-start"
          >
            <SectionTitle
              title={title}
              icon={icon}
              align="start"
            />

            <Typography
              variant="body2"
              sx={{
                lineHeight: 2,
              }}
            >
              {text}
            </Typography>

            {cta && (
              <PillButton
                icon={
                  <img
                    src="/icons/Button%20Background.svg"
                    alt=""
                  />
                }
                iconPosition="left"
                iconSize={40}
              >
                {cta}
              </PillButton>
            )}
          </Stack>
        </Box>

        {/* تصویر / Media */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: 'flex-start',
            },
          }}
        >
          {media ?? (
            <ImageBox
              src={image ?? ''}
              ratio="1 / 1"
              sx={{
                width: '100%',
                maxWidth: 420,
                mx: 'auto',
              }}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
}