import React, { createContext, useEffect, useState } from "react";

const UserContex = createContext();
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState();

  


  useEffect((currentPage)=>{
fetchUsers(currentPage)
  },[])
  const fetchUsers = async (page) => {
    try {
      console.log(page);
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
      setData(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      fetchUsers(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      fetchUsers(currentPage - 1);
    }
  };
  return (
    <UserContex.Provider value={{ users, data, currentPage, totalPages, handlePrevPage, handleNextPage, }}>
      {children}
    </UserContex.Provider>
  );
};

export { UserProvider, UserContex };
