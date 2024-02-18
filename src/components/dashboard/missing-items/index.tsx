import { AlertTriangle } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MissingItems: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <AlertTriangle fill='#fcd34d' strokeWidth={1} size={32} />
          Missing Items
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default MissingItems;
