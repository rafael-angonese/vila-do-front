import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Rotas from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Rotas />

      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
