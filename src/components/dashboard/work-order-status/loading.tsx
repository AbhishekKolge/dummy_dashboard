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
      <CardContent className='px-10 pb-8 pt-0 flex items-center justify-between gap-6'>
        <Skeleton className='h-[180px] w-[180px] rounded-full' />
        <Skeleton className='h-[100px] w-[200px]' />
      </CardContent>
    </Card>
  );
};

export default Loading;
