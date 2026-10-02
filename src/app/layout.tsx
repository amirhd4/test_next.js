import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThemeRegistry from '@/theme/ThemeRegistry';

const abarFont = localFont({
  src: [
    {
      path: '../../public/fonts/AbarMidFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AbarMidFaNum-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AbarMidFaNum-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AbarMidFaNum-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AbarMidFaNum-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-main',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'اقامتگاه بوم‌گردی گیلمار',
  description: 'اقامتگاه بوم‌گردی گیلمار در آغوش طبیعت گیلان',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={abarFont.variable}>
      <body className={abarFont.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}