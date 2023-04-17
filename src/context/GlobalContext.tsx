import { createContext, useEffect } from "react";
import { GlobalContextType, GlobalProviderProps, TaskData } from "./types";
import { useContext, useState } from "react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [toDoList, setToDoList] = useState<TaskData[]>([]);

  useEffect(() => {
    const localStorageJobsData = getLocalStorageItem("Tasks") || [];
    setToDoList(localStorageJobsData);
  }, []);

  const handleToDoList = (value: TaskData[]) => {
    setToDoList(value);
    setLocalStorageItem("Tasks", value);
  };

  return (
    <GlobalContext.Provider value={{ toDoList, handleToDoList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
