import RentalTools from '@/components/dashboard/rental-tools';
import WorkOrderStatus from '@/components/dashboard/work-order-status';
import MissingItems from '@/components/dashboard/missing-items';
import ToolsEquipmentsAvailability from '@/components/dashboard/tools-equipments-availability';
import RestockItems from '@/components/dashboard/restock-items';
import ReceptionSummary from '@/components/dashboard/reception-summary';

const Dashboard: React.FC = () => {
  return (
    <section className='grid grid-cols-5 gap-2'>
      <div className='w-full col-span-3'>
        <RentalTools />
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
