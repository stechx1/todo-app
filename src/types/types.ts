import { Dayjs } from "dayjs";

export type Todo = {
  id: string;
  name: string;
  description: string;
  dueDate: Dayjs | null;
  isCompleted: boolean;
};


export type taskType = 'overdue' | 'outstanding' | 'complete';