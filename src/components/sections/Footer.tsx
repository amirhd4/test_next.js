'use client';

import { Box, Container, Stack, Typography, Link, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  'سوئیت‌ها و اقامت',
  'راهنمای مهمان‌ها',
  'درباره گیلمار',
  'مجله گیلمار',
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#EBF3F5', pt: 6, pb: 4, direction: 'rtl' }}>
      <Container maxWidth="lg">
        <Stack spacing={2.5}>
          <Box
            sx={{
              bgcolor: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            }}
          >
            <Grid container alignItems="stretch">
                <Grid size={{ xs: 12, md: 4, lg: 3.5 }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 220, md: '100%' },
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/footer-map.png"
                      alt="موقعیت مکانی گیلمار"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        WebkitMaskImage: 'url(/images/map-shape.svg)',
                        maskImage: 'url(/images/map-shape.svg)',
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'left center',
                        maskPosition: 'left center',
                      }}
                    />
                  </Box>
                </Grid>

              <Grid size={{ xs: 12, md: 8, lg: 8.5 }}>
                <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Grid container spacing={{ xs: 3, md: 4 }}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, fontSize: 16, color: '#0F172A', mb: 2.5 }}
                      >
                        راه‌های ارتباط با گیلمار
                      </Typography>
                      <Stack spacing={1.5}>
                        <Typography variant="body2" sx={{ color: '#475569', fontSize: 13, lineHeight: 1.8 }}>
                          <Box component="span" sx={{ fontWeight: 700 }}>تلفن پشتیبانی: </Box>
                          ۰۱۳۳۴۷۷۵۴۰۰ – ۰۱۳۳۴۷۷۵۴۱۱
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#475569', fontSize: 13, lineHeight: 1.8 }}>
                          <Box component="span" sx={{ fontWeight: 700 }}>ایمیل: </Box>
                          Info@Gilmar-Gilan.Com
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#475569', fontSize: 13, lineHeight: 1.8 }}>
                          <Box component="span" sx={{ fontWeight: 700 }}>موقعیت گیلمار: </Box>
                          گیلان، جاده رشت به فومن، روستای ملاپرا، خیابان کوزه‌گران، اقامتگاه گیلمار
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, fontSize: 16, color: '#0F172A', mb: 2.5 }}
                      >
                        کاوش در گیلمار
                      </Typography>
                      <Stack spacing={1.5}>
                        {navLinks.map((item) => (
                          <Link
                            key={item}
                            href="#"
                            underline="none"
                            sx={{
                              color: '#475569',
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              transition: 'color 0.2s',
                              '&:hover': { color: '#00C897' },
                              '&::before': {
                                content: '""',
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                bgcolor: '#64748B',
                              },
                            }}
                          >
                            {item}
                          </Link>
                        ))}
                      </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4.5 }}>
                      <Box sx={{ textAlign: { xs: 'right', md: 'left' } }}>
                        <Box
                          component="img"
                          src="/images/logo.png"
                          alt="اقامتگاه بوم‌گردی گیلمار"
                          sx={{ height: 42, width: 'auto', mb: 2 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#475569',
                            fontSize: 13,
                            lineHeight: 2,
                            textAlign: 'justify',
                          }}
                        >
                          اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی گیلان فعالیت می‌کند.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>

        <Box
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '50px',
            px: { xs: 3, md: 4 },
            py: 1.5,
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
          }}
        >
          <Stack
            direction="row-reverse"
            spacing={1.5}
            alignItems="center"
            sx={{ gap: 1.5 }}
          >
            {[
              { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, href: '#' },
              { icon: <TelegramIcon sx={{ fontSize: 18 }} />, href: '#' },
              { icon: <YouTubeIcon sx={{ fontSize: 18 }} />, href: '#' },
              { icon: <CloseIcon sx={{ fontSize: 18 }} />, href: '#' },
            ].map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: '#00C897',
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#00B084',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>

          <Typography variant="body2" sx={{ color: '#64748B', fontSize: 13 }}>
            © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
          </Typography>
        </Box>
        </Stack>
      </Container>
    </Box>
  );
}