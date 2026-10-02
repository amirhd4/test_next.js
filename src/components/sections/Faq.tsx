'use client';

import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SectionTitle from '../common/SectionTitle';

const faqItems = [
  {
    id: 'panel1',
    q: 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟',
    a: 'بله، قوانین کنسلی بر اساس زمان اعلام تغییر متفاوت است. تا ۷۲ ساعت قبل از تحویل اقامتگاه، استرداد وجه با کسر جزیی کارمزد انجام می‌پذیرد.',
  },
  {
    id: 'panel2',
    q: 'آیا اقامتگاه دارای پارکینگ اختصاصی و امن می‌باشد؟',
    a: 'بله، تمامی مهمانان گرامی امکان استفاده از پارکینگ اختصاصی و روباز اقامتگاه همراه با دوربین‌های مداربسته و نگهبانی ۲۴ ساعته را دارند.',
  },
  {
    id: 'panel3',
    q: 'ساعت تحویل و تخلیه اتاق‌ها به چه صورت است؟',
    a: 'ساعت تحویل اتاق (Check-in) از ساعت ۱۴:۰۰ و ساعت تخلیه (Check-out) تا ساعت ۱۲:۰۰ ظهر می‌باشد.',
  },
  {
    id: 'panel4',
    q: 'آیا وعده‌های غذایی محلی در اقامتگاه سرو می‌شود؟',
    a: 'بله، صبحانه محلی گیلانی به صورت رایگان بر روی کلیه رزروها ارائه می‌شود و امکان سفارش وعده‌های ظهر و شب از رستوران سنتی گیلمار وجود دارد.',
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          <SectionTitle
            title="سوالات متداول مهمانان گیلمار"
            subtitle="اگر سوالی در مورد نحوه رزرو، قوانین اقامتگاه یا امکانات رفاهی دارید، پاسخ سوالات پرکاربرد مهمانان را در این بخش مطالعه کنید."
            align="start"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
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
                  mb: 2,
                  borderRadius: '20px !important',
                  boxShadow: isOpen
                    ? '0 12px 32px rgba(25, 195, 160, 0.15)'
                    : '0 8px 24px rgba(31,41,55,.06)',
                  border: isOpen ? '1px solid #19C3A0' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  '&::before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    isOpen ? <RemoveIcon color="primary" /> : <AddIcon color="primary" />
                  }
                >
                  <Typography fontWeight={700} fontSize={15}>
                    {f.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                    {f.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
