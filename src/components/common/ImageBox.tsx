import { Box, BoxProps } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';

type Props = Omit<BoxProps, 'ratio'> & {
  src?: string;
  ratio?: ResponsiveStyleValue<string>;
};

export default function ImageBox({ src, ratio = '4 / 3', sx, children, ...rest }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 1,
        aspectRatio: ratio,
        background: src ? `url(${src}) center/cover` : 'linear-gradient(160deg,#2f4f3a,#8a5a2b)',
        boxShadow: '0 20px 40px rgba(31,41,55,.18)',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}