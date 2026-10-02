import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SectionTitle from '../common/SectionTitle';
import { faqs, intro } from '@/data/content';

export default function Faq() {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          <SectionTitle title="سوالات متداول مهمانان گیلمار" subtitle={intro} align="start" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
          {faqs.map((f, i) => (
            <Accordion key={i} defaultExpanded={i === 0} disableGutters elevation={0} sx={{ mb: 2, borderRadius: '20px !important', boxShadow: '0 8px 24px rgba(31,41,55,.08)', '&::before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<AddIcon color="primary" />}><Typography fontWeight={700} fontSize={14}>{f.q}</Typography></AccordionSummary>
              <AccordionDetails><Typography variant="body2">{f.a}</Typography></AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
