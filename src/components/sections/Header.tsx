'use client';
import { useState } from 'react';
import { AppBar, Box, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PillButton from '../common/PillButton';
import { nav } from '@/data/content';

export default function Header() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  return (
    <Container sx={{ pt: 2 }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ borderRadius: 999, boxShadow: '0 8px 30px rgba(31,41,55,.08)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
          <Box
            component="img"
            src="images/logo.png"
            alt="لوگو"
            sx={{
              width: 169,
              height: '53',
              objectFit: 'contain',
            }}
          />
          {!mobile && (
            <Box component="nav" sx={{ display: 'flex', gap: 3 }}>
              {nav.map((n) => <Typography key={n} variant="body2" color="text.primary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>{n}</Typography>)}
            </Box>
          )}
          {mobile ? <IconButton aria-label="منو" onClick={() => setOpen(true)}><MenuIcon /></IconButton> : <PillButton
              icon={<img src="/icons/User%20Icon.svg" alt="" />}
              iconPosition="right"
              iconSize={22}
            >
              ورود یا ثبت‌نام
            </PillButton>
          }
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240 }}>{nav.map((n) => <ListItemButton key={n}><ListItemText primary={n} /></ListItemButton>)}</List>
      </Drawer>
    </Container>
  );
}
