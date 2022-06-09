import { FC, useState } from "react";
import { useAppDispatch } from "../hooks";
import { actions, pizzaThunk } from "../Redux/actions";
import style from "../component/Pizza/Pizza.module.scss";

interface PropsTypeBtn {
  id: number;
  price: number;
  type: string;
  size: string;
}
export const Button: FC<PropsTypeBtn> = ({ id, price, type, size }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const dispatch = useAppDispatch();
  const handleSave = (id: number) => {
    setActiveBtn(true);
    dispatch(pizzaThunk(id, type, size));
  };
  const handleDelete = (id: number, price: number) => {
    setActiveBtn(false);
    dispatch(actions.deletetItemBasket(id, price));
  };
  return (
    <div className={style.basketBtn}>
      {!activeBtn ? (
        <button className={style.btn} onClick={() => handleSave(id)}>
          + Добавить
        </button>
      ) : (
        <button
          className={style.btn_active}
          onClick={() => handleDelete(id, price)}
        >
          - Удалить
        </button>
      )}
    </div>
  );
};
