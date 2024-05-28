import React, { useContext, useEffect } from "react";
import UserCard from "../../Components/UserCard/UserCard";
import { UserContext } from "../../Services/userContext";
import ClipLoader from "react-spinners/ClipLoader";

const Users = () => {
  const { users, fetchUsers, loadMoreUsers, userPage, datas } = useContext(UserContext);

  useEffect(() => {
    fetchUsers(1);
  }, []);



  return (
    <div className="container">

      <div className="row mx-5 p- pt-4 g-5">
        {users.length > 0 ? (
          <>
            {users.map((item) => (
              <UserCard key={item.id} user={item} />
            ))}
            {datas && userPage < datas.total_pages && (
              <button
                onClick={loadMoreUsers}
                className="btn btn-success w-25 mx-auto"
              >
                Load More..
              </button>
            )}
          </>
        ) : (
          
          <div className="alert alert-danger" role="alert">
            <ClipLoader color="#36d7b7" />
            Users Not Found..
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
