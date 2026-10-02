import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
// TODO: replace with the project's own fonts from the ZIP:
// import localFont from 'next/font/local';
// const font = localFont({ src: [{ path: '../assets/fonts/Font-Regular.woff2', weight: '400' }], variable: '--font-main' });
import ThemeRegistry from '@/theme/ThemeRegistry';

const font = Vazirmatn({ subsets: ['arabic', 'latin'], variable: '--font-main', display: 'swap' });

export const metadata: Metadata = { title: 'اقامتگاه بوم‌گردی گیلمار', description: 'اقامتگاه بوم‌گردی گیلمار در آغوش طبیعت گیلان' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={font.variable}>
      <body><ThemeRegistry>{children}</ThemeRegistry></body>
    </html>
  );
}
