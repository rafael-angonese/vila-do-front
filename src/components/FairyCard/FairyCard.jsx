import Button from "../Button/Button";
import styles from "./styles.module.css";


const FairyCard = ({ name, element, healthPoint }) => {
  return (
    <div className={styles.card}>
      <h1>
        Name: <span>{name}</span>
      </h1>

      <p>
        Elemento: <span>{element}</span>
      </p>
      <p>
        Vida: <span>{healthPoint}</span>
      </p>

      <Button>Visualizar</Button>
      <Button>Excluir</Button>
      <Button>Editar</Button>
    </div>
  );
}

export default FairyCard;
