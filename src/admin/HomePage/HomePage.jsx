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
    <div className="container p-3 d-flex flex-column justify-content-center align-items-center " style={{height: "100vh"}}>
      
        <div className="col-sm-6 col-12">
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <MdOutlineInsertPageBreak className="warning font-large-2"></MdOutlineInsertPageBreak>
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
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <FaUsers className="success font-large-2 "></FaUsers>
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
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <FaBookOpen className="danger font-large-2 "></FaBookOpen>
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
