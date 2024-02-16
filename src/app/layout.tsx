import type { Metadata } from 'next';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/provider/theme-provider';

import './globals.css';

if (process.env.ENV !== 'development') {
  disableReactDevTools();
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dakri Cartons | Abhishek',
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
          <main className='w-screen min-h-screen h-auto'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
