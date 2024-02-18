'use client';
import { useState, useCallback } from 'react';

import { RentalTool } from '@/components/dashboard/types';
import { UseTableReturn, UseTableParamsType, CreateTableType } from './types';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const useTable = (data: UseTableParamsType): UseTableReturn => {
  const [table, setTable] = useState<JSX.Element | null>(null);

  const createTable = useCallback<CreateTableType>((columns) => {
    const headers = columns.map((column) => {
      return <TableHead key={column.id}>{column.title}</TableHead>;
    });
    const rows = null;

    const structure = (
      <Table>
        <TableHeader>
          <TableRow>{headers}</TableRow>
        </TableHeader>
        <TableBody>{rows}</TableBody>
      </Table>
    );

    setTable(structure);
  }, []);

  return { createTable, table };
};

export default useTable;
