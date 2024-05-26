import React, { useEffect, useState } from "react";
import { getUsers } from "../../Services/api";
import UserCard from "../../Components/UserCard/UserCard";

const Users = () => {
  
  useEffect(()=>{
    const fetchUsers = async () => {
      const response = await getUsers(2)
      setUsers(response.data.data)
    }
    fetchUsers()
    console.log(users);
  },[])
  return (
    <div className="container ">
      <div className="row my-2">
        {users ? users.map((item) => {
          return(
            <UserCard />
          )
        }) : null}
      </div>
    </div>
  );
};

export default Users;
