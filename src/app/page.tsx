"use client";

import { Box } from '@mui/material';
import SpaOutlined from '@mui/icons-material/SpaOutlined';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import TextImageSection from '@/components/sections/TextImageSection';
import Values from '@/components/sections/Values';
import Activities from '@/components/sections/Activities';
import Rooms from '@/components/sections/Rooms';
import VideoBlock from '@/components/sections/VideoBlock';
import Testimonials from '@/components/sections/Testimonials';
import Package from '@/components/sections/Package';
import Blog from '@/components/sections/Blog';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import {intro, intro2} from '@/data/content';

export default function Page() {
  return (
    <Box component="main" sx={{ background: 'linear-gradient(180deg,#E6EDFF 0,#F6F8FE 600px)', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <TextImageSection
          title="گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
          text={intro}
          cta="اقامت در گیلمار"
          icon={<img src="/icons/Icon%20Container.svg" alt="" />}
          images={{
            top: '/images/gilmar-1.png',
            left: '/images/gilmar-2.png',
            right: '/images/gilmar-2.png',
          }}
        />
      <Values icon={<img src="/icons/Icon%20Container2.svg" alt="" />} />
      <TextImageSection
          title="خدمات رفاهی گیلمار برای اقامتی دلنشین"
          text={intro2}
          cta=""
          icon={<img src="/icons/Icon%20Container3.svg" alt="" />}
          media={<Activities />}
        />
      <Rooms />
      <VideoBlock />
      <Testimonials />
      <Package />
      <Blog />
      <Faq />
      <Footer />
    </Box>
  );
}
