import Button from "./components/Button";
import Clients from "./components/Clients";
import ConctactForm from "./components/ContactForm";
import Header from "./components/Header/Header";
import Label from "./components/Label";

import about from './assets/about-pic.jpg'

function App() {
  return (
    <>
      <Header />
      <h1>Vila do Front</h1>
      <Button>Comprar</Button>

      <Button color="red" size="20px">
        Vender
      </Button>

      <Button color="blue">Historico</Button>

      <img alt="images" src={require('./assets/about-pic.jpg')} />
      <img  src={about} />

      <br />
      <Label>Nome</Label>
      <Label>Resilia</Label>

      <Clients />

      <ConctactForm />
    </>
  );
}

export default App;
