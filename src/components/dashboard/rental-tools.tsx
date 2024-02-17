import { Wrench } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RentalTools: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Wrench strokeWidth={1.4} size={35} />
          Rental Tools
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default RentalTools;
