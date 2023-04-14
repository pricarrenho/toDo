import { createContext } from "react";
import { GlobalContextType, GlobalProviderProps, TaskData } from "./types";
import { useContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [toDoList, setToDoList] = useState<TaskData[]>([]);

  return (
    <GlobalContext.Provider value={{ toDoList, setToDoList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
