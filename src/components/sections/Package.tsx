import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import PillButton from '../common/PillButton';
import ImageBox from '../common/ImageBox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const packageData = {
  title: 'پکیج ویژه رمانتیک دو نفره گیلمار',
  subtitle: 'تجربه‌ای خاطره‌انگیز و رمانتیک در دل جنگل‌های گیلان با تمامی امکانات رفاهی و پذیرایی ویژه.',
  price: '۲,۶۰۰,۰۰۰ تومان',
  items: [
    '۱ شب اقامت در کلبه چوبی اختصاصی',
    'صبحانه محلی مفصل و ارگانیک',
    'تور قایق‌سواری اختصاصی در تالاب',
    'گشت گیلان‌گردی و جنگل‌نوردی با لیدر',
  ],
};

export default function Package() {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} alignItems="flex-start">
            <SectionTitle title="پکیج‌های ویژه اقامت در گیلمار" align="start" />

            <Typography variant="h5" fontWeight={800} color="text.primary">
              {packageData.title}
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
              {packageData.subtitle}
            </Typography>

            <Grid container spacing={2} width="100%">
              {packageData.items.map((item) => (
                <Grid key={item} size={{ xs: 12, sm: 6 }}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                      p: 2,
                      bgcolor: '#ffffff',
                      borderRadius: 4,
                      boxShadow: '0 4px 16px rgba(31,41,55,.05)',
                    }}
                  >
                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                    <Typography fontSize={13} fontWeight={600}>
                      {item}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={2}
              width="100%"
              sx={{ pt: 1 }}
            >
              <PillButton>همین حالا رزرو کن</PillButton>
              <Typography variant="h6" color="primary" fontWeight={800}>
                قیمت: {packageData.price}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ImageBox ratio="4 / 5" sx={{ maxWidth: 460, mx: 'auto' }} />
        </Grid>
      </Grid>
    </Container>
  );
}
