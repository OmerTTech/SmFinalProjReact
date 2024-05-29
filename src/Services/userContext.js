import React, { createContext, useEffect, useState } from 'react';
import { allData, getUsers } from "./api";
import toast from 'react-hot-toast';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [nextUsers, setNextUsers] = useState([]);
  const [userPage, setUserPage] = useState(1);
  const [datas, setDatas] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [sortFilter, setSortFilter] = useState("");
  const [favCount, setFavCount] = useState()
  const [loading, setLoading] = useState(true); 
  
  
  const [isLogged, setIsLogged] = useState([]);
  useEffect(()=>{setIsLogged(false)},[])

  const fetchUsers = async (page = 1) => {
    try {
      const response = await getUsers(page);
      setUsers(response.data.data);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllUsers = async () => {
    let users = [];
    const totalPages = 3; 
    for (let i = 1; i <= totalPages; i++) {
      const pageUsers = await fetchUsers(i);
      users = [...users, ...pageUsers];
    }
    setAllUsers(users);
    setUsers(users)
  };

  const getDatas = async () => {
    try {
      const { data } = await allData();
      setDatas(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loadMoreUsers = async () => {
    if (userPage < 3) {
      const nextPage = userPage + 1;
      setUserPage(nextPage);
      try {
        const response = await getUsers(nextPage);
        const newUsers = response.data.data;
        const sortedUsers = sortUsers([...users, ...newUsers], sortFilter);
        setNextUsers([...nextUsers, ...newUsers]);
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error loading more users:", error);
      }
    }
  };

  const sortUsers = (users, order) => {
    return users.sort((a, b) => {
      if (order === "A-Z") {
        return a.first_name > b.first_name ? 1 : -1;
      } else if (order === "Z-A") {
        return a.first_name < b.first_name ? 1 : -1;
      }
      return 0;
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchUsers(1);
      await getDatas();
      setLoading(false);
    };
    loadData();
  }, []);

  const favHandler = (user) => {
    const myFavs = JSON.parse(localStorage.getItem("favorites")) || []
    const isAlreadyFavorited = myFavs.filter(fav => fav.id === user.id).length > 0
    if (!isAlreadyFavorited) {
      const updatedFavs = [...myFavs, user];
      toast.success('Successfully added Favorites!')
      localStorage.setItem("favorites", JSON.stringify(updatedFavs))
      setFavCount(updatedFavs.length)
    }
    else(
      toast.error('You have already added your favorites')
    )
  }
  

  return (
    <UserContext.Provider value={{ users, setUsers, datas, allUsers, getDatas, setUsers, nextUsers, setNextUsers, fetchUsers, loadMoreUsers, getAllUsers, userPage, sortFilter, setSortFilter, loading ,  isLogged, setIsLogged, sortUsers, favHandler, favCount, setFavCount }}>
      {children}
    </UserContext.Provider>
  );
};
