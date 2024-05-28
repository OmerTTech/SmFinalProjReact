import { useContext, useEffect } from "react";
import { UserContext } from "../../Services/userContext";
import { FaUser, FaBookOpen, FaUsers } from "react-icons/fa";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const HomePage = () => {
  const { getDatas, datas } = useContext(UserContext);
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div
      className="container p-3 d-flex flex-column justify-content-center align-items-center gap-3"
      style={{ height: "100vh" }}
    >
      <div className="col-sm-6 col-12">
        <div className="card shadow-sm">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <MdOutlineInsertPageBreak className="warning display-4"></MdOutlineInsertPageBreak>
                </div>
                <div className="media-body text-right">
                  <h3>6</h3>
                  <span>Per Page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-12">
        <div className="card shadow-sm">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <FaUsers className="success display-4"></FaUsers>
                </div>
                <div className="media-body text-right">
                  <h3>12</h3>
                  <span>Total Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-12">
        <div className="card shadow-sm">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <FaBookOpen className="danger display-4 "></FaBookOpen>
                </div>
                <div className="media-body text-right">
                  <h3>2</h3>
                  <span>All Pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
