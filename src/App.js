import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AdminRoutes from './Routes/AdminRoutes';
import PublicRoutes from './Routes/PublicRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


function App() {
  const isLogged = false
  return (
    <BrowserRouter>
      {isLogged ? <AdminRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
