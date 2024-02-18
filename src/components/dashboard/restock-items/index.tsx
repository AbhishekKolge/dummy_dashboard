import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RestockItemsTable from './table';

import { getRestockItems } from '@/services';

const RestockItems: React.FC = async () => {
  const data = await getRestockItems();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Restock Items</CardTitle>
      </CardHeader>
      <CardContent className='px-10 pb-8 pt-0'>
        <RestockItemsTable data={data} />
      </CardContent>
    </Card>
  );
};

export default RestockItems;
