'use client';
import { useState } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { DATA } from './data';

interface SideNavProps {
  children: React.ReactNode;
}

const SideNav: React.FC<SideNavProps> = (props) => {
  const { children } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  let links: {
    title: string;
    label?: string;
    icon: LucideIcon;
  }[] = DATA;
  return (
    <>
      <nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link href='#'>
                  <link.icon className='h-4 w-4' />
                  <span className='sr-only'>{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right' className='flex items-center gap-4'>
                {link.title}
                {link.label && (
                  <span className='ml-auto text-muted-foreground'>
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link key={index} href='#'>
              <link.icon className='mr-2 h-4 w-4' />
              {link.title}
              {link.label && <span>{link.label}</span>}
            </Link>
          )
        )}
      </nav>
      {children}
    </>
  );
};

export default SideNav;
