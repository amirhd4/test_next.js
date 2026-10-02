import { Box, Stack, Typography } from '@mui/material';
import ImageBox from '../common/ImageBox';
import { activities } from '@/data/content';

// Horizontal scroller that bleeds off the viewport edge, as in the design.
export default function Activities() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, overflow: 'hidden' }}>
      <Stack direction="row" spacing={3} sx={{ overflowX: 'auto', px: { xs: 2, md: 8 }, pb: 2, scrollSnapType: 'x mandatory' }}>
        {activities.map((a) => (
          <ImageBox key={a} ratio="3 / 4" sx={{ flex: '0 0 auto', width: { xs: 200, md: 260 }, scrollSnapAlign: 'start', display: 'flex', alignItems: 'flex-end', p: 2 }}>
            <Typography color="#fff" fontWeight={700} sx={{ textShadow: '0 2px 8px rgba(0,0,0,.6)' }}>{a}</Typography>
          </ImageBox>
        ))}
      </Stack>
    </Box>
  );
}
