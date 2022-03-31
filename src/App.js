import Button from "./components/Button";
import Clients from "./components/Clients";
import ConctactForm from "./components/ContactForm";
import Label from "./components/Label";

function App() {
  return (
    <div>
      <h1>Vila do Front</h1>
      <Button >Comprar</Button>

      <Button color="red" size="20px" >Vender</Button>

      <Button color="blue">Historico</Button>

      <br />
      <Label>Nome</Label>
      <Label>Resilia</Label>
  

      {/* <Clients /> */}

      <ConctactForm />
    </div>
  );
}

export default App;
