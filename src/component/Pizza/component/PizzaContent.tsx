import { FC } from "react";
import { InfoPizza } from "../../../assets";
import { pizzaType } from "../../../type/types";
import style from "../Pizza.module.scss";

interface props {
  pizza: Array<pizzaType>;
  title: string;
}
export const PizzaContent: FC<props> = ({ pizza, title }) => {
  return (
    <div className={style.PizzaContent}>
      <>
        <div className={style.PizzaContent_title}>{title}</div>
        <div className={style.Pizzas}>
          {pizza.map((el) => (
            <div className={style.PizzaItem} key={el.id}>
              <div className={style.PizzaItem_img}>
                <img src={el.imageUrl} alt={el.name} className={style.img} />
              </div>
              <div className={style.PizzaItem_name}>{el.name}</div>
              <InfoPizza
                size={el.sizes}
                type={el.types}
                price={el.price}
                id={el.id}
              />
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
