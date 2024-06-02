import React, { useContext, useState } from "react";
import "../Auth.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../../Services/api";
import { UserContext } from "../../../Services/userContext";

const Login = () => {
  const { setToken, getUserData, setSingleUserData } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();

  const getLogin = async () => {
    if (userLogin.email.length > 0 && userLogin.password.length > 0) {
      if (
        userLogin.email == "admin@gmail.com" &&
        userLogin.password == "admin123"
      ) {
        const adminUser = {
          first_name: "Admin",
          token: "admin123",
        };
        setSingleUserData(adminUser);
        localStorage.setItem("adminUser", JSON.stringify(adminUser));
        localStorage.setItem("token", JSON.stringify(adminUser.token));
        setToken(adminUser.token);
        navigator("/");
      } else {
        try {
          const { data } = await registerUser(userLogin);
          localStorage.setItem("userId", JSON.stringify(data.id));
          if (data) {
            localStorage.setItem("token", JSON.stringify(data.token));
            setToken(data.token);
            toast.success("Successfully logged in!");
            getUserData();
            navigator("/");
          }
        } catch (error) {
          toast.error(`Error! ${error.response.data.error}`);
        }
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
          <button onClick={getLogin} className="btn btn-primary my-2">
            Submit
          </button>
          <span>
            New here ? <Link to="/register">Create Account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
