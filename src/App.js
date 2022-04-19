import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";

import Header from "./components/Header/Header";
import Rotas from "./routes";
import Title from "./components/Title/Title";

function App() {
  const Button = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <>
      <BrowserRouter>
        <Header />

        <Button>Normal</Button>
        <Button primary>Primary</Button>

        <Title color="blue" size={50} >Nosso Titulo em Styled Components</Title>


        <Rotas />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
