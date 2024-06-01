import React, { useContext } from "react";
import "./UserCard.css"
import { UserContext } from "../../Services/userContext";

const UserCard = ({ user }) => {
  const { delFavHandler } =
    useContext(UserContext);
  return (
    <div className="col-sm-6 col-lg-4 col-6 pt-3 d-flex flex-column usercard">
      <p className="text-center fw-bold m-0">{`${user.first_name} ${user.last_name}`}</p>
      <p className="text-center">{user.email}</p>
      <img src={user.avatar} alt="avatar" />
      
      <button onClick={()=>delFavHandler(user.id)} className="mx-auto btn-danger mt-3 p-2 text-white">
        Delete
      </button>
    </div>
  );
};

export default UserCard;
