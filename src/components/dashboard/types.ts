import { LucideIcon } from 'lucide-react';

export interface Member {
  firstName: string;
  lastName: string;
  profileImage: string;
  level: number;
}

export type WorkStatus = 'completed' | 'inProgress' | 'notStarted' | 'onHold';

export type StockStatus = 'low' | 'none';

export interface RentalTool {
  order: number;
  toolRef: number;
  member: Member;
  workStatus: WorkStatus;
  duration: number;
}

export interface MissingItems {
  toolRef: number;
  member: Member;
}

export interface RestockItems {
  toolRef: number;
  toolOrEquipment: string;
  status: StockStatus;
}

export interface ActionButtonProps {
  children: React.ReactNode;
}

export interface StatusProps {
  type: WorkStatus | StockStatus;
}

export interface ToolsEquipmentAvailability {
  name: String;
  count: number;
  total: number;
  icon: LucideIcon;
}

export interface InformationProps {
  data: ToolsEquipmentAvailability[];
  enableChart?: boolean;
}

export interface DonutChartProps {
  count: number;
  total: number;
}

export interface CustomLabelProps {
  viewBox?: { cx: number; cy: number };
  value: string;
}
