import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { getToolsEquipmentsAvailability } from '@/services';
import Information from '../common/information';

const ToolsEquipmentsAvailability: React.FC = async () => {
  const data = await getToolsEquipmentsAvailability();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tools and Equipments Availability</CardTitle>
      </CardHeader>
      <CardContent className='px-10 pb-8 pt-0 group'>
        <Information data={data} enableChart={true} />
      </CardContent>
    </Card>
  );
};

export default ToolsEquipmentsAvailability;
