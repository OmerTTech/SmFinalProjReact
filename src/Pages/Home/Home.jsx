import React from "react";
import workerimg from "../../Assets/worker-BG-img.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="my-2 homepage">
      <div className="img w-100" src={workerimg} alt=""></div>
      <div className="container">
        <div className="elements d-flex flex-column w-50">
          <h1 className="text-white">Chris Kelly</h1>
          <p style={{color: "#ffffff80"}}>
            I am a sales professional specializing in product marketing and
            distribution based in Clarcton, MA
          </p>
          <button
            className="btn p-3 px-4 text-white"
            style={{ backgroundColor: "#00d6ad", width: "40%" }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
