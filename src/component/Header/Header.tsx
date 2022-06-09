import { FC } from "react";
import style from "./Header.module.scss";
import ImageLogo from "../../assets/imgHeader/Logo.png";
import ImageBasket from "../../assets/imgHeader/Basket.png";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { actions } from "../../Redux/actions";

interface HeaderProps {
  basketStatus: boolean;
}

export const Header: FC<HeaderProps> = ({ basketStatus }) => {
  const dispatch = useAppDispatch();
  const price = useAppSelector((State) => State.pizzaPage.price);
  const count = useAppSelector((State) => State.pizzaPage.pizzaBacket.length);
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img
          onClick={() => dispatch(actions.CloseBasket())}
          src={ImageLogo}
          alt="logo"
          className={style.logo_img}
        />
        <div className={style.description}>
          <div className={style.description_title}>
            <h1 className={style.description_title_item}>REACT PIZZA</h1>
          </div>
          <div className={style.description_text}>
            <p className={style.description_text_item}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
      </div>
      {!basketStatus && (
        <button
          className={style.basket}
          onClick={() => dispatch(actions.OpenBasket())}
        >
          <span className={style.price}>{price} Р</span>
          <img
            src={ImageBasket}
            alt="basket_logo"
            className={style.basket_logo}
          />
          <span className={style.count}>{count}</span>
        </button>
      )}
    </header>
  );
};
