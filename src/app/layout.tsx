import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/provider/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dakri Cartons',
  description: 'Front end assignment.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html lang='en'>
      <body className={`${inter.className} relative min-h-screen`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='w-screen min-h-screen pt-28 h-auto'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
