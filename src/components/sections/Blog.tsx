import { Container, Grid, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ImageBox from '../common/ImageBox';
import { posts, intro } from '@/data/content';

export default function Blog() {
  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>
      <SectionTitle title="مجله و مقالات گیلمار؛ روایت سفر طبیعت و آرامش" subtitle={intro} />
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {posts.map((p, i) => (
          <Grid key={i} size={{ xs: 12, md: 4 }}>
            <ImageBox ratio="4 / 5" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 3, color: '#fff' }}>
              <Typography fontWeight={700} mb={1}>{p.title}</Typography>
              <Typography variant="caption" sx={{ opacity: .85 }}>{p.text}</Typography>
            </ImageBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
