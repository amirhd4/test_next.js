import { Box, Container, Grid, Stack, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { nav } from '@/data/content';

export default function Footer() {
  return (
    <Container sx={{ pb: 5, pt: 3 }}>
      <Box
        sx={{
          bgcolor: '#ffffff',
          borderRadius: 6,
          p: { xs: 3, md: 6 },
          boxShadow: '0 -10px 40px rgba(31,41,55,.06)',
        }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight={800} color="primary.main" mb={2}>
              اقامتگاه گیلمار
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 2, color: 'text.secondary', mb: 2 }}>
              بزرگ‌ترین مجموعه بوم‌گردی، رفاهی و تفریحی در دل طبیعت سرسبز گیلان، دارای مجوز رسمی از اداره کل میراث فرهنگی و گردشگری.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography fontWeight={700} fontSize={16} mb={2}>
              دسترسی سریع
            </Typography>
            <Stack spacing={1.5}>
              {nav.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="text.secondary"
                  fontSize={14}
                  sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography fontWeight={700} fontSize={16} mb={2}>
              ارتباط با گیلمار
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocationOnIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  گیلان، رشت، جاده خمام به فومن، اقامتگاه گیلمار
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  ۰۱۳-۳۳۰۰۰۰۰۰ | ۰۹۱۲۰۰۰۰۰۰۰
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  info@Gilmar-Gilan.Com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: '1px solid #F3F4F6',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © تمامی حقوق مادی و معنوی این وب‌سایت متعلق به اقامتگاه بوم‌گردی گیلمار می‌باشد.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            طراحی و پیاده‌سازی بر اساس استاندارد MUI & Next.js
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
