import { FC } from "react";
import { pizzaType } from "../../type/types";
import { PizzaContent, PizzaSort } from "./component";
import style from "./Pizza.module.scss";

interface props {
  pizza: Array<pizzaType>;
  title: string;
}

export const Pizza: FC<props> = ({ pizza, title }) => {
  return (
    <div className={style.PizzaPage}>
      <PizzaSort />
      <PizzaContent pizza={pizza} title={title} />
    </div>
  );
};
