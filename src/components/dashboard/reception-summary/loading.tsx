import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const Loading: React.FC = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-10 w-[200px]' />
        </CardTitle>
      </CardHeader>
      <CardContent className='px-10 pb-8 pt-0'>
        <Skeleton className='h-16 mt-3 w-full' />
        <Skeleton className='h-16 mt-6 w-full' />
      </CardContent>
    </Card>
  );
};

export default Loading;
