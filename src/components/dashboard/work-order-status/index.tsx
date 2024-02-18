import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { getWorkOrderStatus } from '@/services';
import PieInformation from '@/components/charts/pie';

const WorkOrderStatus: React.FC = async () => {
  const data = await getWorkOrderStatus();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Order Status</CardTitle>
      </CardHeader>
      <CardContent
        data-title-bold={true}
        className='px-6 pb-4 md:px-10 md:pb-8 pt-0 w-full w-min-[400px] h-[300px] md:h-[200px]'
      >
        <PieInformation data={data} />
      </CardContent>
    </Card>
  );
};

export default WorkOrderStatus;
