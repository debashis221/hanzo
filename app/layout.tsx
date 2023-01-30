import '@/styles/globals.css';
import React from 'react';
import { Montserrat } from '@next/font/google';
const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="hanzo">
      <head>
        <title>Hanzo - Watch anime free anytime </title>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
