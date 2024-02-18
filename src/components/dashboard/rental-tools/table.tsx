'use client';
import { useEffect } from 'react';
import { RentalTool } from '../types';

import useTable from '@/hook/useTable';

const RentalToolsTable: React.FC<{ data: RentalTool[] }> = (props) => {
  const { data } = props;
  const { table, createTable } = useTable(data);

  useEffect(() => {
    createTable([
      {
        id: 1,
        title: 'Work Order',
      },
      {
        id: 2,
        title: 'Tool Ref.',
      },
      {
        id: 3,
        title: 'Team Member',
      },
      {
        id: 4,
        title: 'Status',
      },
      {
        id: 5,
        title: 'Duration',
      },
      {
        id: 6,
        title: '',
      },
    ]);
  }, [createTable]);

  return <>{table}</>;
};

export default RentalToolsTable;
