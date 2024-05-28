import React, { useContext, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./TotalUsers.css"
import { UserContext } from "../../Services/userContext.js";

const TotalUsers = () => {
  const { datas, getDatas, allUsers, getAllUsers } = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
    getDatas()
    console.log(allUsers);
  }, []);

  return (
    <div className="container mt-5">
      <h1>Total Users({datas ? datas.total : <ClipLoader color="#00ff00"/>})</h1>
      <table className="table table-striped table-hover mt-5 mx-auto w-75">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length > 0 ? (
            allUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={user.first_name} />
                </td>
                <td>
                  <button className="btn btn-success me-1">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No Users Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TotalUsers;
