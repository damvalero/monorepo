import { PropsCard } from "../../types";
import './card.css'

const Card = ({products}:PropsCard) => {
  return (
    <>
      {products.map((product) => {
        return (
          <li className="card-container" key={product.id}>
            <div className="card-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-text">
              <p>{product.title}</p>
              <p>{product.price}€</p>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Card;
