import DonutChart from '@/components/charts/donut';

import { InformationProps } from '../types';

const Information: React.FC<InformationProps> = (props) => {
  const { data, enableChart } = props;

  return (
    <div className='grid gap-1 group-[[data-title-bold=true]]:gap-6'>
      {data.map((item, index) => {
        return (
          <div key={index} className='flex items-center justify-between'>
            <div>
              <item.icon size={46} strokeWidth={1.2} />
            </div>
            <div className='font-light group-[[data-title-bold=true]]:font-bold text-lg'>
              {item.name}
            </div>
            {enableChart && item?.total ? (
              <div className='w-[90px] h-[90px]'>
                <DonutChart count={item.count} total={item.total} />
              </div>
            ) : (
              <div className='font-bold text-lg'>{item.count}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Information;
