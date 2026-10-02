import { Container, Grid, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ImageBox from '../common/ImageBox';
import { rooms, intro } from '@/data/content';

export default function Rooms() {
  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>
      <SectionTitle title="انواع اتاق‌های اقامتگاه گیلمار" subtitle={intro} />
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {rooms.map((r, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <ImageBox ratio="3 / 4" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 2, color: '#fff' }}>
              <Typography fontWeight={700}>{r.title}</Typography>
              <Typography variant="caption">{r.price}</Typography>
            </ImageBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
