import { Box, Card, Container, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { values, intro } from '@/data/content';

export default function Values({ icon }: { icon?: React.ReactNode }) {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <SectionTitle
        title="همراهی برای حفظ آرامش و طبیعت گیلمار"
        icon={icon}
        subtitle={intro}
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
          mt: 4,
        }}
      >
        {values.map((v) => (
          <Card
              key={v.title}
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: 'transparent',
              }}
            >
              <Box
                sx={{
                  width: 96,
                  height: 96,
                  mx: 'auto',
                  mb: 2,
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: '#fff',
                  borderRadius: 6,
                  boxShadow: '0 16px 30px rgba(31,41,55,.12)',
                }}
              >
                <Box
                  component="img"
                  src={v.image}
                  alt=""
                  sx={{
                    width: 96,
                    height: 96,
                    objectFit: 'contain',

                    transform:
                      v === values[1]
                        ? 'rotate(15deg)'
                        : 'rotate(-15deg)',

                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>

              <Typography fontWeight={700} mb={1}>
                {v.title}
              </Typography>

              <Typography variant="body2">
                {v.text}
              </Typography>
            </Card>
        ))}
      </Box>
    </Container>
  );
}