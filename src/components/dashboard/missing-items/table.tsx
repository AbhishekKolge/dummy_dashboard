'use client';
import { useEffect } from 'react';

import { MissingItems } from '../types';

import { Badge } from '@/components/ui/badge';
import MemberTag from '../common/member-tag';
import ActionButton from '../common/action-button';

import useTable from '@/hook/useTable';

const MissingItemsTable: React.FC<{ data: MissingItems[] }> = (props) => {
  const { data } = props;
  const { table, createTable } = useTable(data);

  useEffect(() => {
    createTable({
      toolRef: {
        id: 1,
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
        id: 2,
        title: 'Team Member',
        row: (member) => {
          return <MemberTag {...member} />;
        },
      },
      action: {
        id: 3,
        title: '',
        row: () => {
          return <ActionButton>Details</ActionButton>;
        },
      },
    });
  }, [createTable]);

  return <>{table}</>;
};

export default MissingItemsTable;
