import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header/Header";
import Rotas from "./routes";
import { UserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <>
      <ChakraProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Header />

            <Rotas />
          </BrowserRouter>
        </UserContextProvider>
      </ChakraProvider>
      <ToastContainer />
    </>
  );
}

export default App;
