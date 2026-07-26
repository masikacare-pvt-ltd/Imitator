import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imitator.in'),
  title: {
    default: 'IMITATOR | Elite AI Digital Transformation',
    template: '%s | IMITATOR',
  },
  description:
    'IMITATOR engineers world-class digital products and transforms traditional enterprises into autonomous, AI-powered organizations. Precision logic meets luxury design.',
  keywords: [
    'AI',
    'digital transformation',
    'enterprise AI',
    'web development',
    'IoT',
    'robotics',
    'machine learning',
    'IMITATOR',
  ],
  authors: [{ name: 'IMITATOR' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imitator.in',
    siteName: 'IMITATOR',
    title: 'IMITATOR | Elite AI Digital Transformation',
    description:
      'We engineer world-class digital products and transform traditional enterprises into autonomous, AI-powered organizations.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'IMITATOR Elite AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMITATOR | Elite AI Digital Transformation',
    description:
      'We engineer world-class digital products and transform traditional enterprises into autonomous, AI-powered organizations.',
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
