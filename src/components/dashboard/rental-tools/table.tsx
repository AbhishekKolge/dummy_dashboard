'use client';
import { useEffect } from 'react';

import { RentalTool } from '../types';

import { Badge } from '@/components/ui/badge';
import MemberTag from '../common/member-tag';
import ActionButton from '../common/action-button';
import Status from '../common/status';

import useTable from '@/hook/useTable';
import { minimumTwoDigits, millisecondsToMinutes } from '@/utils/helper';

const RentalToolsTable: React.FC<{ data: RentalTool[] }> = (props) => {
  const { data } = props;
  const { table, createTable } = useTable(data);

  useEffect(() => {
    createTable({
      order: {
        id: 1,
        title: 'Work Order',
        row: (order) => {
          return (
            <span className='font-normal text-xs'>
              {minimumTwoDigits(order)}
            </span>
          );
        },
      },
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
      member: {
        id: 3,
        title: 'Team Member',
        row: (member) => {
          return <MemberTag {...member} />;
        },
      },
      workStatus: {
        id: 4,
        title: 'Status',
        row: (workStatus) => {
          return <Status type={workStatus} />;
        },
      },
      duration: {
        id: 5,
        title: 'Duration',
        row: (duration) => {
          return (
            <div className='font-light text-xs text-muted-foreground'>
              {millisecondsToMinutes(duration)}
            </div>
          );
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

export default RentalToolsTable;
