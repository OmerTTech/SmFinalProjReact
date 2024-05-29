import React from "react";
import "./UserCard.css"
import { MdFavorite } from "react-icons/md";

const UserCard = ({ user }) => {
  return (
    <div className="col-4 pt-3 d-flex flex-column usercard">
      <p className="text-center fw-bold m-0">{`${user.first_name} ${user.last_name}`}</p>
      <p className="text-center">{user.email}</p>
      <img src={user.avatar} alt="avatar" />
      <button className="mx-auto mt-3">
        <p>Add Favorites</p>
        <span>
          <MdFavorite color="#88c7dc" />
        </span>
      </button>
    </div>
  );
};

export default UserCard;
