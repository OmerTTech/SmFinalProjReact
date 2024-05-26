import React, { useContext, useEffect } from "react";
import { getUsers } from "../../Services/api";
import UserCard from "../../Components/UserCard/UserCard";
import { UserContext } from "../../Services/userContext";

const Users = () => {
  const { users, setUsers } = useContext(UserContext);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers(1);
      setUsers(response.data.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="container ">
      <div className="row mx-5 p-5 pt-4 g-5">
        {users ? (
          users.map((item) => {
            return <UserCard key={item.id} user={item} />;
          })
        ) : (
          <div class="alert alert-danger" role="alert">
            Not Users Found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
