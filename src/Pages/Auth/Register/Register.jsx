import React, { useContext, useState } from "react";
import "../Auth.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../../Services/api";
import { UserContext } from "../../../Services/userContext";

const Login = () => {
  const { setToken } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();

  const getRegister = async () => {
    if (userLogin.email.length > 0 && userLogin.password.length > 0) {
      try {
        const { data } = await registerUser(userLogin);
        localStorage.setItem("userId", JSON.stringify(data.id));

        if (data) {
          toast.success("Successfully logged in!");
          navigator("/login");
        }
      } catch (error) {
        toast.error(`Error! ${error.response.data.error}`);
      }
    } else if (userLogin.email.length == 0 && userLogin.password.length > 0) {
      toast.error("Error! Email is empty..");
    } else if (userLogin.password.length == 0 && userLogin.email.length > 0) {
      toast.error("Error! Password is empty..");
    } else {
      toast.error("Error! Email and Password is empty..");
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center mt-4 mb-5">
        <div className="form border border-secondary rounded d-flex justify-content-center align-items-center flex-column py-3 gap-2">
          <h4>SignIn to your account</h4>
          <input
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            type="email"
            className="form-control my-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <input
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            type="password"
            className="form-control my-1"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <button onClick={getRegister} className="btn btn-primary my-2">
            Submit
          </button>
          <span>
            Do you have a Account ? <Link to="/login">Login Account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
