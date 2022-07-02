import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({
  userName: "string",
  setUserName: (userName: string) => {},
  gamb: 0,
  setGamb: (n: number) => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userName, setUserName] = useState("");
  const [gamb, setGamb] = useState(1);
  return (
    <UserContext.Provider value={{ userName, setUserName, gamb, setGamb }}>
      {children}
    </UserContext.Provider>
  );
};
