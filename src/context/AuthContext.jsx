import React, { useContext, createContext, useState } from "react";
const UserContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const value = {
    loading,
    setLoading,
    setCurrentUser,
    currentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const UserAuth = () => {
  return useContext(UserContext);
};
