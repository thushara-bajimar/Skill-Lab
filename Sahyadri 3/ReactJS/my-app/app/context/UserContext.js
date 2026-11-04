"use client";
import { createContext, useState } from "react";
// create global context for user data

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [name, setName] = useState("Thushara");

  return(
    <UserContext.Provider value={{ name, setName }}>
        {children}
    </UserContext.Provider>
  );
}