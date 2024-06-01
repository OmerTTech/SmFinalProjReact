import React, { useContext, useEffect } from "react";
import FavUserCard from "../../Components/UserCards/FavUserCard";
import { UserContext } from "../../Services/userContext";
import ClipLoader from "react-spinners/ClipLoader";

const Favorites = () => {
  const {
    favUsers,
    setFavUsers,
    getFavoriteUsers,
    users,
    fetchUsers,
    loadMoreUsers,
    userPage,
    datas,
    sortFilter,
    setSortFilter,
    sortUsers,
  } = useContext(UserContext);

  useEffect(() => {
    if (sortFilter === "default") {
      getFavoriteUsers();
    } else {
      setFavUsers(sortUsers([...favUsers], sortFilter));
    }
  }, [sortFilter]);

  useEffect(() => {
    getFavoriteUsers();
  }, []);
  return (
    <div className="container mb-5">
      <span className="dropdown d-flex justify-content-end align-items-end mt-4 mx-5 px-4">
        <select
          onChange={(e) => setSortFilter(e.target.value)}
          name="filter"
          id="filter"
        >
          <option value="default" defaultChecked>
            filter
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </span>
      <div className="row mx-5 p- pt-4 g-5">
        {favUsers && favUsers.length > 0 ? (
          <>
            {favUsers.map((item) => (
              <FavUserCard key={item.id} user={item} />
            ))}
          </>
        ) : (
          <div className="alert alert-danger" role="alert">
            <ClipLoader color="#36d7b7" />
            Favorite Users Not Found..
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
