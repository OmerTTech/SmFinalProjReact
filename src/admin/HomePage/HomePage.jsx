import { useContext, useEffect } from "react";
import { UserContext } from "../../Services/userContext";

const HomePage = () => {
  const { getDatas, datas} = useContext(UserContext);
  useEffect(() => {
    getDatas()
  }, []);

  return <button onClick={() => console.log(datas)}>see response</button>;
};

export default HomePage;
