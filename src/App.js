import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header/Header";
import Rotas from "./routes";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Header />

          <Rotas />
        </BrowserRouter>
      </ChakraProvider>
      <ToastContainer />
    </>
  );
}

export default App;
