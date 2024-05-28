import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AdminRoutes from './Routes/AdminRoutes';
import PublicRoutes from './Routes/PublicRoutes';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './Services/userContext';
import { useContext } from 'react';
function App() {
  const { isLogged } = useContext(UserContext);
  return (
    <BrowserRouter>
      {isLogged ? <AdminRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
