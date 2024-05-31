import React, { useContext, useEffect, useState } from "react";
import UserCard from "../../Components/UserCards/UserCard";
import { UserContext } from "../../Services/userContext";
import ClipLoader from "react-spinners/ClipLoader";

const Users = () => {
  const { users, setUsers, fetchUsers, loadMoreUsers, userPage, datas, sortFilter, setSortFilter, sortUsers, getAllUsers } =
    useContext(UserContext);

  useEffect(() => {
    if (sortFilter === "default") {
      getAllUsers()
    } else {
      setUsers(sortUsers([...users], sortFilter));
    }
  }, [sortFilter]);

  useEffect(() => {
    fetchUsers(1);
  }, []);

  

  return (
    <div className="container mb-5">
      <span className="dropdown d-flex justify-content-end align-items-end mt-4 mx-5 px-4">
        <select onChange={(e) => setSortFilter(e.target.value)} name="filter" id="filter">
          <option value="default" defaultChecked>filter</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </span>
      <div className="row mx-5 p- pt-4 g-5">
        {users.length > 0 ? (
          <>
            {users.map((item) => (
              <UserCard key={item.id} user={item} />
            ))}
            {datas && userPage < datas.total_pages && (
              <button
                onClick={loadMoreUsers}
                className="btn btn-success"
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
