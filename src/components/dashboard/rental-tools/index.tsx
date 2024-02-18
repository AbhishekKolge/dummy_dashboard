import { Wrench } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RentalToolsTable from './table';

import { getRentalTools } from '@/services';

const RentalTools: React.FC = async () => {
  const data = await getRentalTools();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Wrench strokeWidth={1.4} size={45} />
          Rental Tools
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6 pb-4 md:px-10 md:pb-8 pt-0'>
        <RentalToolsTable data={data} />
      </CardContent>
    </Card>
  );
};

export default RentalTools;
