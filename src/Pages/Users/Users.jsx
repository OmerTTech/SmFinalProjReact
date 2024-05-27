import React, { useContext, useEffect } from "react";
import UserCard from "../../Components/UserCard/UserCard";
import { UserContext } from "../../Services/userContext";

const Users = () => {
  const { users, fetchUsers, loadMoreUsers, nextUsers, nextUsersList } =
    useContext(UserContext);

  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <div className="container ">
      <div className="row mx-5 p-5 pt-4 g-5">
        {users ? (
          <>
            {users.map((item) => (
              <UserCard key={item.id} user={item} />
            ))}
            {
              nextUsers.length > 0 && <button
              onClick={loadMoreUsers}
              className="btn btn-success w-25 mx-auto"
            >
              Load More..
            </button>
            }
          </>
        ) : (
          <div className="alert alert-danger" role="alert">
            Not Users Found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
