import { FC } from "react";
import style from "../Basket.module.scss";
import Logo from "../../../assets/imgBasket//Logo.png";
import ClearLogo from "../../../assets/imgBasket/ClearLogo.png";
import { useAppDispatch } from "../../../hooks";
import { actions } from "../../../Redux/actions";

interface PropsType {
  disabled: boolean;
}

export const BasketHeader: FC<PropsType> = ({ disabled }) => {
  const dispatch = useAppDispatch();
  const className = disabled ? style.def : style.clearBtn;
  return (
    <div className={style.Basket_title}>
      <div className={style.Basket_title_text}>
        <img src={Logo} alt="BasketLogo" className={style.logo} />
        <h3 className={style.title}>Корзина</h3>
      </div>
      <div className={style.containerClearBtn}>
        <img src={ClearLogo} alt="ClearLogo" className={style.ClearLogo} />
        <button
          disabled={disabled}
          className={className}
          onClick={() => dispatch(actions.clearBasket())}
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
};
