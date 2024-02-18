import { Suspense } from 'react';

import RentalTools from '@/components/dashboard/rental-tools';
import WorkOrderStatus from '@/components/dashboard/work-order-status';
import MissingItems from '@/components/dashboard/missing-items';
import ToolsEquipmentsAvailability from '@/components/dashboard/tools-equipments-availability';
import RestockItems from '@/components/dashboard/restock-items';
import ReceptionSummary from '@/components/dashboard/reception-summary';
import RentalToolsLoading from '@/components/dashboard/rental-tools/loading';
import MissingItemsLoading from '@/components/dashboard/missing-items/loading';
import RestockItemsLoading from '@/components/dashboard/restock-items/loading';
import ToolsEquipmentAvailabilityLoading from '@/components/dashboard/tools-equipments-availability/loading';

const Dashboard: React.FC = () => {
  return (
    <section className='grid grid-cols-5 gap-4'>
      <div className='w-full h-full col-span-3'>
        <Suspense fallback={<RentalToolsLoading />}>
          <RentalTools />
        </Suspense>
      </div>
      <div className='w-full h-full col-span-2'>
        <WorkOrderStatus />
      </div>
      <div className='w-full h-full col-span-2'>
        <Suspense fallback={<MissingItemsLoading />}>
          <MissingItems />
        </Suspense>
      </div>
      <div className='w-full h-full col-span-3'>
        <Suspense fallback={<ToolsEquipmentAvailabilityLoading />}>
          <ToolsEquipmentsAvailability />
        </Suspense>
      </div>
      <div className='w-full h-full col-span-3'>
        <Suspense fallback={<RestockItemsLoading />}>
          <RestockItems />
        </Suspense>
      </div>
      <div className='w-full h-full col-span-2'>
        <ReceptionSummary />
      </div>
    </section>
  );
};

export default Dashboard;
