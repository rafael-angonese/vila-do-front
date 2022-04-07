import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from "./components/Button/Button";
import Clients from "./components/Clients";
import Conctact from "./components/Contact";
import Header from "./components/Header/Header";
import Label from "./components/Label";

import about from "./assets/about-pic.jpg";

import { ReactComponent as Wave } from "./assets/imagens/wave.svg";
import { ReactComponent as Truque } from "./assets/imagens/truque.svg";
import WaveSvg from "./components/WaveSvg";

function App() {
  const [exibir, setExibir] = useState(true);
  const [name, setName] = useState("Resilia");

  const onChangeExibir = (event) => {
    setExibir(!exibir);

    setName("asdfsafsdojif sdajfdoskaf");
  };

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Conctact />} />
          <Route path="/contact" element={<Conctact />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
