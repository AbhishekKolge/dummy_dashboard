'use client';
import { useEffect } from 'react';

import { RestockItems } from '../types';

import { Badge } from '@/components/ui/badge';
import ActionButton from '../common/action-button';
import Status from '../common/status';

import useTable from '@/hook/useTable';

const RestockItemsTable: React.FC<{ data: RestockItems[] }> = (props) => {
  const { data } = props;
  const { table, createTable } = useTable(data);

  useEffect(() => {
    createTable({
      toolRef: {
        id: 2,
        title: 'Tool ref.',
        row: (toolRef) => {
          return (
            <Badge
              variant='secondary'
              className='border-none rounded-sm font-normal min-w-14 justify-center'
            >
              {toolRef}
            </Badge>
          );
        },
      },
      toolOrEquipment: {
        id: 3,
        title: 'Tool/Equipment',
        row: (toolOrEquipment) => {
          return <span className='font-normal text-xs'>{toolOrEquipment}</span>;
        },
      },
      status: {
        id: 4,
        title: 'Stock Status',
        row: (status) => {
          return <Status type={status} />;
        },
      },
      action: {
        id: 6,
        title: '',
        row: () => {
          return <ActionButton>Details</ActionButton>;
        },
      },
    });
  }, [createTable]);

  return <>{table}</>;
};

export default RestockItemsTable;
