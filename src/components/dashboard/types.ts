export interface Member {
  firstName: string;
  lastName: string;
  profileImage: string;
  level: number;
}

export type WorkStatus = 'completed' | 'inProgress' | 'notStarted' | 'onHold';

export interface RentalTool {
  order: number;
  toolRef: number;
  member: Member;
  workStatus: WorkStatus;
  duration: number;
}
