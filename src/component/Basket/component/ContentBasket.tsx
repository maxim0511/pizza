import { FC } from "react";
import { Counter } from "../../../assets";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../../../Redux/actions";
import { pizzaType } from "../../../type/types";
import style from "../Basket.module.scss";
import DeleteLogo from "../../../assets/imgBasket/DeleteLogo.png";

interface PropsType {
  pizza: Array<pizzaType>;
}

export const ContentBasket: FC<PropsType> = ({ pizza }) => {
  const dispatch = useAppDispatch();
  const typesPizza = useAppSelector((State) => State.pizzaPage.ArrayTypes);
  return (
    <div className={style.contentBasket}>
      {pizza.map((el) => (
        <div className={style.contentBasketItem} key={el.id}>
          <div className={style.img}>
            <img src={el.imageUrl} alt="Image" />
            <div className={style.description}>
              <h3 className={style.description_name}>{el.name}</h3>
              <div>
                {typesPizza.map((type) => (
                  <p className={style.description_text}>
                    {el.id == type.id ? type.types + "," : ""}
                  </p>
                ))}
                {typesPizza.map((size) => (
                  <p className={style.description_text}>
                    {el.id == size.id ? size.size : ""}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Counter price={el.price} />
          <button
            className={style.btnDelItem}
            onClick={() => dispatch(actions.deletetItemBasket(el.id, el.price))}
          >
            <img src={DeleteLogo} alt="Delete" />
          </button>
        </div>
      ))}
    </div>
  );
};
