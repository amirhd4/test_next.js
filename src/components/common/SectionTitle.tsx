import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Props = { title: string; subtitle?: string; icon?: ReactNode; align?: 'center' | 'start' };

export default function SectionTitle({ title, subtitle, icon, align = 'center' }: Props) {
  const center = align === 'center';
  return (
    <Stack spacing={1.5} alignItems={center ? 'center' : 'flex-start'} textAlign={center ? 'center' : 'start'}>
      {icon && (
        <Stack alignItems="center" justifyContent="center" sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'primary.main', color: '#fff' }}>
          {icon}
        </Stack>
      )}
      <Typography variant="h3" component="h2">{title}</Typography>
      {subtitle && <Typography variant="body2" maxWidth={640}>{subtitle}</Typography>}
    </Stack>
  );
}
