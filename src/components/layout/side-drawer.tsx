'use client';
import { Menu, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Button, buttonVariants } from '@/components/ui/button';
import Logo from '../ui/logo';

import { DATA } from './data';

const SideDrawer: React.FC = () => {
  const pathname = usePathname();

  return (
    <Drawer direction='left'>
      <nav className='lg:hidden p-6 bg-grey-100 w-full fixed top-0 inset-x-0 z-10'>
        <DrawerTrigger asChild>
          <Button variant='outline'>
            <Menu />
          </Button>
        </DrawerTrigger>
      </nav>
      <DrawerContent className='h-full bg-soil-brown-100 m-0 border-none py-8 px-5 w-10/12 sm:w-4/12 rounded-none'>
        <div className='flex justify-center'>
          <Logo isCollapsed={false} />
        </div>
        <div
          data-collapsed={true}
          className='flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 mt-32'
        >
          <nav className='grid gap-1'>
            {DATA.map((link, index) => (
              <Link
                key={index}
                href='#'
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-12 px-4 justify-start bg-soil-brown-100 shadow-none hover:bg-soil-brown-200',
                  pathname === link.pathname && 'bg-soil-brown-200'
                )}
              >
                <link.icon className='mr-2 h-6 w-6' />
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex justify-center mt-auto'>
          <Button
            className='w-14 h-14 rounded-full shadow-md'
            asChild
            variant='outline'
            size='icon'
          >
            <Link href='#'>
              <Settings strokeWidth={2.25} className='h-7 w-7' />
            </Link>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
