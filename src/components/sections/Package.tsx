import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import PillButton from '../common/PillButton';
import ImageBox from '../common/ImageBox';
import { packageInfo as p } from '@/data/content';

export default function Package() {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2.5} alignItems="flex-start">
            <SectionTitle title="پکیج‌های ویژه اقامت در گیلمار" align="start" />
            <Typography fontWeight={700}>{p.title}</Typography>
            <Typography variant="body2">{p.text}</Typography>
            <Stack direction="row" spacing={2}>
              {p.items.map((i) => <Box key={i} sx={{ px: 2, py: 1.5, bgcolor: '#fff', borderRadius: 4, boxShadow: '0 8px 20px rgba(31,41,55,.08)', fontSize: 13 }}>{i}</Box>)}
            </Stack>
            <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
              <PillButton>همین حالا رزرو کن</PillButton>
              <Typography color="primary" fontWeight={700}>قیمت: {p.price}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}><ImageBox ratio="4 / 5" sx={{ maxWidth: 440, mx: 'auto' }} /></Grid>
      </Grid>
    </Container>
  );
}
