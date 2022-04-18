import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./styles.module.css";


const FairyCard = ({ fairy, onDelete }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <h1>
        Name: <span>{fairy?.name}</span>
      </h1>

      <p>
        Elemento: <span>{fairy?.element}</span>
      </p>
      <p>
        Vida: <span>{fairy?.health_point}</span>
      </p>

      <Button onClick={() => navigate(`/fairies/${fairy.id}`)}>Visualizar</Button>
      <Button onClick={(event) => onDelete(fairy.id)}>Excluir</Button>
      <Button  onClick={() => navigate(`/fairies/edit/${fairy.id}`)}>Editar</Button>
    </div>
  );
}

export default FairyCard;
