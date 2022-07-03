import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({
  userName: "string",
  setUserName: (userName: string) => {},
  searchCount: 0,
  setSearchCount: (n: number) => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userName, setUserName] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  return (
    <UserContext.Provider value={{ userName, setUserName, searchCount, setSearchCount }}>
      {children}
    </UserContext.Provider>
  );
};
