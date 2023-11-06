'use client';
import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import './globals.css';
import '@cloudscape-design/global-styles/index.css';
import { TopNavComponent } from '@/app/top-nav';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Washington hikes" />
        <title>Washington Hikes</title>
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <TopNavComponent />
          <div className={'router-content'}>{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
