import type { Metadata } from 'next';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Inter } from 'next/font/google';

import Provider from '@/provider';
import SideNav from '@/components/layout/side-nav';
import SideDrawer from '@/components/layout/side-drawer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

if (process.env.ENV !== 'development') {
  disableReactDevTools();
}

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
      <body className={`${inter.className} min-h-screen`}>
        <Provider>
          <SideDrawer />
          <SideNav>
            <main className='h-screen overflow-y-scroll pt-28 lg:py-6'>
              {children}
            </main>
          </SideNav>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
