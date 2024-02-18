'use client';
import { Ban } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error | unknown;
}

const Error: React.FC<ErrorProps> = (props) => {
  const { error } = props;

  console.error(error);

  const onRefresh = () => {
    window.location.href = '/dashboard';
  };

  return (
    <section className='h-full grid items-center'>
      <div className='mx-auto max-w-screen-sm text-center grid gap-3'>
        <Ban className='m-auto w-[100px] h-[100px] text-red-500' />
        <p className='text-3xl tracking-tight font-bold text-gray-900'>
          Something went wrong
        </p>
        <p className='text-lg font-light text-gray-500'>
          {`You'll find lots to explore on the dashboard.`}
        </p>
        <Button onClick={onRefresh}>Go to Dashboard</Button>
      </div>
    </section>
  );
};

export default Error;
