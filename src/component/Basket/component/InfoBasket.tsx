import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import style from "../Basket.module.scss";

interface PropsType {
  count: number;
}

export const InfoBasket: FC<PropsType> = ({ count }) => {
  const price = useAppSelector((State) => State.pizzaPage.price);
  return (
    <div className={style.infoBasket}>
      <div className={style.countPizza}>
        Всего пицц: <span className={style.span}>{count} шт.</span>
      </div>
      <div className={style.PricePizza}>
        Сумма заказа: <span className={style.span2}>{price} P</span>
      </div>
    </div>
  );
};
