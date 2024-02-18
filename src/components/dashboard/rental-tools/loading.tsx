import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const Loading: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-14 w-14 rounded-full' />
          <Skeleton className='h-10 w-[200px]' />
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6 pb-4 md:px-10 md:pb-8 pt-0'>
        <Skeleton className='h-8 mt-3 w-full' />
        <Skeleton className='h-8 mt-3 w-full' />
        <Skeleton className='h-8 mt-3 w-full' />
        <Skeleton className='h-8 mt-3 w-full' />
      </CardContent>
    </Card>
  );
};

export default Loading;
