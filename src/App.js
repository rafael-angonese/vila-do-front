import Button from "./components/Button";
import Clients from "./components/Clients";
import Conctact from "./components/Contact";
import Header from "./components/Header/Header";
import Label from "./components/Label";

import about from "./assets/about-pic.jpg";

import { ReactComponent as Wave } from "./assets/imagens/wave.svg";
import { ReactComponent as Truque } from "./assets/imagens/truque.svg";
import WaveSvg from "./components/WaveSvg";
import { useState } from "react";

function App() {
  const [exibir, setExibir] = useState(true);
  const [name, setName] = useState('Resilia');

  const onChangeExibir = (event) => {
      setExibir(!exibir);

      setName('asdfsafsdojif sdajfdoskaf')
  };

  return (
    <>
      <Header />

      <button onClick={onChangeExibir}>Exibir</button>

      {name}

      {exibir && <Conctact />}

      {/* <Button>Comprar</Button>

      <Button color="red" size="20px">
        Vender
      </Button>

      <Button color="blue">Historico</Button> */}

      {/* <div style={{ width: "100px" }}>
        <Truque />
      </div> */}

      {/* <div style={{ width: "300px" }}>
        <Wave />
      </div>

      <div style={{ width: "300px" }}>
        <WaveSvg />
      </div>

      <br />
      <br />

      <img alt="images" src={require("./assets/about-pic.jpg")} />
      <img src={about} />

      <br />
      <Label>Nome</Label>
      <Label>Resilia</Label>

      <Clients /> */}
    </>
  );
}

export default App;
