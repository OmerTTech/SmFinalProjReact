import React, { useContext, useState } from "react";
import { UserContext } from "../../Services/userContext";

const Update = ({ user, modalId }) => {
  const { setAllUsers } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const updateHandler = () => {
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const updatedUsers = allUsers.map((getUser) =>
      getUser.id === user.id
        ? { ...getUser, first_name: firstName, last_name: lastName, email: email }
        : getUser
    );
    console.log(updatedUsers);
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-success me-1"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        data-bs-whatever="@mdo"
      >
        Update
      </button>

      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-1">
                  <label htmlFor="firstName" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className="form-control"
                    id="firstName"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="LastName" className="col-form-label">
                    Surname:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className="form-control"
                    id="LastName"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    id="email"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={updateHandler}
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
