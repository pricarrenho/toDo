import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  toDoList: TaskData[];
  handleToDoList: (value: TaskData[]) => void;
};

export type TaskData = {
  task: string;
  id: number;
  status: boolean;
};
