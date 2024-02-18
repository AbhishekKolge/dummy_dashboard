import { AlertTriangle } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MissingItemsTable from './table';

import { getMissingItems } from '@/services';

const MissingItems: React.FC = async () => {
  const data = await getMissingItems();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <AlertTriangle fill='#fcd34d' strokeWidth={1} size={32} />
          Missing Items
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6 pb-4 md:px-10 md:pb-8 pt-0'>
        <MissingItemsTable data={data} />
      </CardContent>
    </Card>
  );
};

export default MissingItems;
