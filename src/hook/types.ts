import { RentalTool } from '@/components/dashboard/types';

export interface UseTableReturn {
  createTable: CreateTableType;
  table: JSX.Element | null;
}

export type UseTableParamsType = RentalTool[];

export interface CreateTableParams {
  id: number;
  title: string;
}

export type CreateTableType = (columns: CreateTableParams[]) => void;
