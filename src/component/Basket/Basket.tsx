import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { pizzaType } from "../../type/types";
import style from "./Basket.module.scss";
import {
  BasketHeader,
  ContainerBtn,
  ContentBasket,
  InfoBasket,
  NotPizzaBacket,
} from "./component";

interface BasketProps {
  pizza: Array<pizzaType>;
}

export const Basket: FC<BasketProps> = ({ pizza }) => {
  const [disableBtn, setDisabled] = useState(true);
  const count = useAppSelector((State) => State.pizzaPage.pizzaBacket);
  useEffect(() => {
    if (count.length) setDisabled(false);
  }, [count]);
  return (
    <>
      {pizza.length ? (
        <div className={style.Basket}>
          <BasketHeader disabled={disableBtn} />
          <ContentBasket pizza={pizza} />
          <InfoBasket count={count.length} />
          <ContainerBtn disabled={disableBtn} />
        </div>
      ) : (
        <NotPizzaBacket />
      )}
    </>
  );
};
