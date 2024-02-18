import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { getReceptionSummary } from '@/services';
import Information from '../common/information';

const ReceptionSummary: React.FC = async () => {
  const data = await getReceptionSummary();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reception Summary</CardTitle>
      </CardHeader>
      <CardContent data-title-bold={true} className='px-10 pb-8 pt-0 group'>
        <Information data={data} enableChart={false} />
      </CardContent>
    </Card>
  );
};

export default ReceptionSummary;
