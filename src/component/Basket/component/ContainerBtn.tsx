import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import { actions } from "../../../Redux/actions";
import style from "../Basket.module.scss";

interface PropsType {
  disabled: boolean;
}

export const ContainerBtn: FC<PropsType> = ({ disabled }) => {
  const dispatch = useAppDispatch();
  const className = disabled ? style.def : style.btn;
  return (
    <div className={style.containerBtn}>
      <div className={style.CloseBasket}>
        <button
          onClick={() => dispatch(actions.CloseBasket())}
          className={style.btn}
        >
          &#60; Вернуться назад
        </button>
      </div>
      <div className={style.pay_btn}>
        <button className={className} disabled={disabled}>
          Оплатить сейчас
        </button>
      </div>
    </div>
  );
};
