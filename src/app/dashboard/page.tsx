import { Suspense } from 'react';

import RentalTools from '@/components/dashboard/rental-tools';
import WorkOrderStatus from '@/components/dashboard/work-order-status';
import MissingItems from '@/components/dashboard/missing-items';
import ToolsEquipmentsAvailability from '@/components/dashboard/tools-equipments-availability';
import RestockItems from '@/components/dashboard/restock-items';
import ReceptionSummary from '@/components/dashboard/reception-summary';
import RentalToolsLoading from '@/components/dashboard/rental-tools/loading';

const Dashboard: React.FC = () => {
  return (
    <section className='grid grid-cols-5 gap-4'>
      <div className='w-full col-span-3'>
        <Suspense fallback={<RentalToolsLoading />}>
          <RentalTools />
        </Suspense>
      </div>
      <div className='w-full col-span-2'>
        <WorkOrderStatus />
      </div>
      <div className='w-full col-span-2'>
        <MissingItems />
      </div>
      <div className='w-full col-span-3'>
        <ToolsEquipmentsAvailability />
      </div>
      <div className='w-full col-span-3'>
        <RestockItems />
      </div>
      <div className='w-full col-span-2'>
        <ReceptionSummary />
      </div>
    </section>
  );
};

export default Dashboard;
