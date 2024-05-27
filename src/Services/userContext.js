import React, { createContext, useEffect, useState } from 'react';
import { getUsers } from "./api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [nextUsers, setNextUsers] = useState([null])
  const [userPage, setUserPage] = useState(1)

  const fetchUsers = async () => {
    const response = await getUsers(userPage-1);
    setUsers(response.data.data);
  };

  const loadMoreUsers = async () => {
    const nextPage = userPage + 1
    setUserPage(nextPage)
    const response = await getUsers(userPage);
    setNextUsers([...response.data.data])
    setUsers([...users, ...response.data.data]);
  }

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <UserContext.Provider value={{ users, setUsers, nextUsers, setNextUsers, fetchUsers, loadMoreUsers }}>
      {children}
    </UserContext.Provider>
  );
};
