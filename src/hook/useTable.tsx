'use client';
import { useState, useCallback } from 'react';

import {
  UseTableReturn,
  UseTableParamsType,
  CreateTableType,
  CreateRowType,
} from './types';

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

  const createRow: CreateRowType = (rows, columns) => {
    return (
      <TableRow>
        {Object.entries(rows).map(([key, value]) => {
          return (
            <TableCell key={key} className='font-medium'>
              {columns[key].row(value)}
            </TableCell>
          );
        })}
        {columns.action && (
          <TableCell className='font-medium text-right'>
            {columns.action.row()}
          </TableCell>
        )}
      </TableRow>
    );
  };

  const createTable = useCallback<CreateTableType>(
    (columns) => {
      const headers = Object.entries(columns).map(([_, value]) => {
        return (
          <TableHead className='font-light text-xs' key={value.id}>
            {value.title}
          </TableHead>
        );
      });

      const structure = (
        <Table>
          <TableHeader>
            <TableRow>{headers}</TableRow>
          </TableHeader>
          <TableBody>
            {data.map((rows) => {
              return createRow(rows, columns);
            })}
          </TableBody>
        </Table>
      );

      setTable(structure);
    },
    [data]
  );

  return { createTable, table };
};

export default useTable;
