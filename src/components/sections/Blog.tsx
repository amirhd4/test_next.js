import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ImageBox from '../common/ImageBox';

const blogPosts = [
  {
    id: 1,
    title: '۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید',
    excerpt: 'از قایق‌سواری در سپیدرود تا شب‌نشینی دور آتش در هوای پاییزی گیلان...',
    date: '۱۰ مهر ۱۴۰۳',
    readTime: '۵ دقیقه مطالعه',
  },
  {
    id: 2,
    title: 'راهنمای جامع سفر به گیلان و اقامت در کلبه‌های بوم‌گردی',
    excerpt: 'همه آنچه باید درباره انتخاب بهترین اقامتگاه بوم‌گردی و زمان مناسب سفر بدانید...',
    date: '۰۵ مهر ۱۴۰۳',
    readTime: '۷ دقیقه مطالعه',
  },
  {
    id: 3,
    title: 'طعم‌های اصیل گیلانی؛ معرفی محبوب‌ترین غذاهای محلی',
    excerpt: 'آشنایی با میرزاقاسمی، باقلاقاتوق و سایر خوراکی‌های لذیذ گیلانی در اقامتگاه...',
    date: '۲۸ شهریور ۱۴۰۳',
    readTime: '۴ دقیقه مطالعه',
  },
];

export default function Blog() {
  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>
      <SectionTitle
        title="مجله و مقالات گیلمار؛ روایت سفر طبیعت و آرامش"
        subtitle="با مقالات مجله گیلمار بیشتر درباره جاذبه‌های گردشگری، فرهنگ محلی گیلان و نکات سفر به شمال بخوانید."
      />

      <Grid container spacing={3} sx={{ mt: 4 }}>
        {blogPosts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, md: 4 }}>
            <ImageBox
              ratio="4 / 5"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Chip
                  label={post.readTime}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: 11,
                  }}
                />
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  {post.date}
                </Typography>
              </Box>

              <Stack spacing={1} sx={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                <Typography fontWeight={700} fontSize={18} lineHeight={1.5}>
                  {post.title}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.85, lineHeight: 1.6 }}>
                  {post.excerpt}
                </Typography>
              </Stack>
            </ImageBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
