import {
  RentalTool,
  MissingItems,
  RestockItems,
} from '@/components/dashboard/types';

export interface UseTableReturn {
  createTable: CreateTableType;
  table: JSX.Element | null;
}

export type UseTableParamsType = RentalTool[] | MissingItems[] | RestockItems[];

export interface CreateTableParams {
  [key: string]: {
    id: number;
    title: string;
    row: (item?: any) => JSX.Element;
  };
}

export type CreateTableType = (columns: CreateTableParams) => void;

export type CreateRowType = (
  rows: RentalTool | MissingItems | RestockItems,
  columns: CreateTableParams
) => JSX.Element;
