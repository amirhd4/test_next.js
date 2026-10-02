import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { nav } from '@/data/content';

export default function Footer() {
  return (
    <Container sx={{ pb: 3 }}>
      <Box sx={{ bgcolor: '#fff', borderRadius: 6, p: { xs: 3, md: 5 }, boxShadow: '0 -10px 40px rgba(31,41,55,.06)' }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}><Typography fontWeight={800} color="primary" mb={1}>گیلمار</Typography><Typography variant="body2">مجموعه اکوتوریسم، رفاهی و تفریحی در دل طبیعت گیلان.</Typography></Grid>
          <Grid size={{ xs: 6, md: 4 }}><Typography fontWeight={700} mb={1}>کاوش در گیلمار</Typography><Stack>{nav.slice(1).map((n) => <Typography key={n} variant="body2">{n}</Typography>)}</Stack></Grid>
          <Grid size={{ xs: 6, md: 4 }}><Typography fontWeight={700} mb={1}>راه‌های ارتباط با گیلمار</Typography><Typography variant="body2">info@Gilmar-Gilan.Com</Typography></Grid>
        </Grid>
        <Typography variant="caption" color="text.secondary" display="block" mt={4} textAlign="center">تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.</Typography>
      </Box>
    </Container>
  );
}
