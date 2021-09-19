import React, { useState, createContext } from "react";

export const usercontext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Tarek", position: "Front End Dev", salary: 20000 },
    { id: 2, name: "Shuvo", position: "Data Scientist", salary: 22000 },
    { id: 3, name: "Emdad", position: "Full Stack Dev", salary: 27000 },
  ]);

  return (
    <usercontext.Provider value={[users, setUsers]}>
      {props.children}
    </usercontext.Provider>
  );
};