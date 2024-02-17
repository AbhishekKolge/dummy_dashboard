import { Home, Wrench, FileCog, Sheet } from 'lucide-react';

import { NavLink } from './types';

export const DATA: NavLink[] = [
  {
    title: 'Dashboard',
    icon: Home,
    pathname: '/dashboard',
  },
  {
    title: 'Tools',
    icon: Wrench,
    pathname: '/tools',
  },
  {
    title: 'Inventory',
    icon: FileCog,
    pathname: '/inventory',
  },
  {
    title: 'Analytics',
    icon: Sheet,
    pathname: '/analytics',
  },
];
