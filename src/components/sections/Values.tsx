import { Box, Card, Container, Grid, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { values, intro } from '@/data/content';

export default function Values() {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <SectionTitle title="همراهی برای حفظ آرامش و طبیعت گیلمار" subtitle={intro} />
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {values.map((v) => (
          <Grid key={v.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'transparent' }}>
              <Box sx={{ width: 96, height: 96, mx: 'auto', mb: 2, display: 'grid', placeItems: 'center', fontSize: 48, bgcolor: '#fff', borderRadius: 6, boxShadow: '0 16px 30px rgba(31,41,55,.12)' }}>{v.emoji}</Box>
              <Typography fontWeight={700} mb={1}>{v.title}</Typography>
              <Typography variant="body2">{v.text}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
