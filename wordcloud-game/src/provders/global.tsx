import React, { createContext, useState, FC, ReactNode } from "react";

interface AuthContextState {
  name: string | null;
  setName: (user: string | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const defaultAuthContextValue = {} as AuthContextState;

export const AuthContext = createContext(defaultAuthContextValue);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [name, setName] = useState<string | null>("");

  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
