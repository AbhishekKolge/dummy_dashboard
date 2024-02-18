import { StatusProps } from '../types';

import { STATUS } from '@/utils/defaults';

const Status: React.FC<StatusProps> = (props) => {
  const { type } = props;

  return (
    <div className='flex items-center gap-2'>
      <div
        className='border w-3 h-3 rounded-full p-[1px]'
        style={{
          borderColor: STATUS[type].color,
        }}
      >
        <div
          className='bg-primary w-full h-full rounded-full'
          style={{
            backgroundColor: STATUS[type].color,
          }}
        ></div>
      </div>
      <span className='capitalize font-light text-xs text-muted-foreground'>
        {STATUS[type].text}
      </span>
    </div>
  );
};

export default Status;
