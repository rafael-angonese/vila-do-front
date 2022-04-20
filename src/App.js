import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';

import Header from "./components/Header/Header";
import Rotas from "./routes";
import { Badge } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Button>Teste React boostrap </Button>
        <Button variant="primary">Primary</Button>{' '}

        <Badge bg="primary">Primary</Badge> <Badge bg="danger">Danger</Badge>

        <Rotas />

      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
