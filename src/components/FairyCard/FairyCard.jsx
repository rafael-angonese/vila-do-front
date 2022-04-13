import Button from "../Button/Button";
import styles from "./styles.module.css";


const FairyCard = ({ fairy, onDelete }) => {

  return (
    <div className={styles.card}>
      <h1>
        Name: <span>{fairy.name}</span>
      </h1>

      <p>
        Elemento: <span>{fairy.element}</span>
      </p>
      <p>
        Vida: <span>{fairy.health_point}</span>
      </p>

      <Button>Visualizar</Button>
      <Button onClick={(event) => onDelete(fairy.id)}>Excluir</Button>
      <Button>Editar</Button>
    </div>
  );
}

export default FairyCard;
