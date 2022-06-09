import { FC, useEffect, useState } from "react";
import style from "../component/Basket/Basket.module.scss";
import { useAppDispatch } from "../hooks";
import { actions } from "../Redux/actions";

interface props {
  price: number;
}

export const Counter: FC<props> = ({ price }) => {
  let [count, SetCount] = useState(1);
  const [allPrice, SetPrice] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    SetPrice(price);
  }, [count]);
  const countMinus = () => {
    SetCount((count -= 1));
    dispatch(actions.setPriceMinus(price));
  };
  const countPlus = () => {
    SetCount((count += 1));
    dispatch(actions.setPrice(price));
  };
  return (
    <>
      <div className={style.counter}>
        {count > 1 ? (
          <button className={style.counterBtn} onClick={countMinus}>
            -
          </button>
        ) : (
          ""
        )}
        <span className={style.count}>{count}</span>
        <button className={style.counterBtn} onClick={countPlus}>
          +
        </button>
      </div>
      <div className={style.priceContainer}>{allPrice * count} Р</div>
    </>
  );
};
