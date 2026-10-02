'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {intro, intro5} from "@/data/content";
import SectionTitle from "@/components/common/SectionTitle";

const faqItems = [
  {
    id: 'panel1',
    q: 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟',
    a: 'در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.',
  },
  {
    id: 'panel2',
    q: 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟',
    a: 'در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.',
  },
  {
    id: 'panel3',
    q: 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟',
    a: 'در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.',
  },
  {
    id: 'panel4',
    q: 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟',
    a: 'در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.',
  },
  {
    id: 'panel5',
    q: 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟',
    a: 'در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.',
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#F8FAFC',
        direction: 'rtl',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* ---------------- سمت راست: سوالات متداول (آکاردئون‌ها) ---------------- */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqItems.map((f) => {
                const isOpen = expanded === f.id;
                return (
                  <Accordion
                    key={f.id}
                    expanded={isOpen}
                    onChange={handleChange(f.id)}
                    disableGutters
                    elevation={0}
                    sx={{
                      borderRadius: '24px !important',
                      bgcolor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                      boxShadow: isOpen
                        ? '0 20px 40px rgba(0, 0, 0, 0.05)'
                        : '0 4px 12px rgba(0, 0, 0, 0.02)',
                      border: '1px solid',
                      borderColor: isOpen ? 'transparent' : 'rgba(226, 232, 240, 0.8)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::before': { display: 'none' },
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        flexDirection: 'row-reverse', // قرار دادن دکمه + در سمت راست
                        gap: 2,
                        '& .MuiAccordionSummary-content': {
                          margin: '12px 0',
                          justifyContent: 'flex-start',
                        },
                      }}
                      expandIcon={
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            bgcolor: '#00C897',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(0, 200, 151, 0.3)',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {isOpen ? (
                            <RemoveIcon sx={{ fontSize: 20 }} />
                          ) : (
                            <AddIcon sx={{ fontSize: 20 }} />
                          )}
                        </Box>
                      }
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          color: '#1E293B',
                          textAlign: 'right',
                        }}
                      >
                        {f.q}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails sx={{ pt: 0, pb: 2.5, px: 3 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#64748B',
                          lineHeight: 2,
                          fontSize: '0.9rem',
                          textAlign: 'right',
                        }}
                      >
                        {f.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Grid>

          {/* ---------------- سمت چپ: تیتر و تصویر دوربین ---------------- */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'right' },
              }}
            >
              {/* الگوی شطرنجی پس‌زمینه سمت چپ */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: -20,
                  width: '120%',
                  height: '120%',
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* آیکون فیروزه‌ای علامت سوال */}

                <SectionTitle
                  title="سوالات متداول مهمانان گیلمار"
                  icon={<img src="/icons/Icon%20Container6.svg" alt="" />}
                  subtitle={intro5}
                />

              <Box
                component="img"
                src="/images/image2.png"
                alt="سوالات متداول گیلمار"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: 380,
                  height: 'auto',
                  mt: 2,
                  filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.08))',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}