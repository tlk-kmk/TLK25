import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Timo Leon Krause – Product Design & Brand Identity',
  description: 'THE PHENOMENON OF A SLIGHT ACTION LEADING TO SIGNIFICANT IMPACT.',
  openGraph: {
    title: 'Timo Leon Krause – Product Design & Brand Identity',
    description: 'THE PHENOMENON OF A SLIGHT ACTION LEADING TO SIGNIFICANT IMPACT.',
    url: 'https://www.tlk.hamburg',
    type: 'website',
    images: [
      {
        url: 'https://www.tlk.hamburg/public/components/preview.png', // full URL required
        width: 1200,
        height: 630,
        alt: 'TLK Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timo Leon Krause – Product Design & Brand Identity',
    description: 'THE PHENOMENON OF A SLIGHT ACTION LEADING TO SIGNIFICANT IMPACT.',
    images: ['https://www.tlk.hamburg/public/components/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Android */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />


      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
