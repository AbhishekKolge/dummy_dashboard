import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ActionButtonProps } from '../types';

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button
      asChild
      className='shadow-none font-light px-4 h-7 rounded-sm bg-tertiary'
      size='sm'
    >
      <Link href='#'>{children}</Link>
    </Button>
  );
};

export default ActionButton;
