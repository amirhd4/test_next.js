import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TextImageSection from './TextImageSection';
import ImageBox from '../common/ImageBox';
import { intro } from '@/data/content';

export default function VideoBlock() {
  const media = (
    <ImageBox ratio="4 / 3" sx={{ display: 'grid', placeItems: 'center' }}>
      <IconButton aria-label="پخش ویدیو" sx={{ bgcolor: 'rgba(255,255,255,.9)', width: 64, height: 64, '&:hover': { bgcolor: '#fff' } }}><PlayArrowIcon color="primary" fontSize="large" /></IconButton>
    </ImageBox>
  );
  return <TextImageSection title="تور ویدیویی اقامتگاه گیلمار" text={intro} cta="اقامت در گیلمار" media={media} />;
}
