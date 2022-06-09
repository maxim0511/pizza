import { FC, useState } from "react";
import { Button } from ".";
import style from "../component/Pizza/Pizza.module.scss";

interface props {
  size: Array<Number>;
  type: Array<Number>;
  price: number;
  id: number;
}
export const InfoPizza: FC<props> = ({ size, type, price, id }) => {
  const arraydough = [
    {
      id: 1,
      text: "тонкое тесто",
      disabled: false,
      types: 0,
      class: style.description_dough,
    },
    {
      id: 2,
      text: "толстое тесто",
      disabled: false,
      types: 1,
      class: style.description_dough,
    },
  ];
  const arraySize = [
    {
      id: 1,
      size: "26 см.",
      sizeprop: 26,
      disabled: false,
      class: style.description_size,
    },
    {
      id: 2,
      size: "30 см.",
      sizeprop: 30,
      disabled: false,
      class: style.description_size,
    },
    {
      id: 3,
      size: "40 см.",
      sizeprop: 40,
      disabled: false,
      class: style.description_size,
    },
  ];
  const [btnActiveDough, setActiveBtnDough] = useState("");
  const [btnActiveSize, setActiveBtnSize] = useState("");
  const handleDough = (event: any) => {
    setActiveBtnDough(event.target.value);
  };
  const handleSize = (event: any) => {
    setActiveBtnSize(event.target.value);
  };
  if (size.length !== arraySize.length) {
    size.forEach((el) => {
      arraySize.filter((size) => {
        if (size.sizeprop !== el) size.disabled = true;
        else size.disabled = false;
      });
    });
  }
  if (type.length !== arraydough.length) {
    type.forEach((el) => {
      arraydough.filter((dough) => {
        if (dough.types !== el) dough.disabled = true;
        else dough.disabled = false;
      });
    });
  }
  arraydough.filter((dough) => {
    if (dough.text == btnActiveDough)
      dough.class = style.description_dough_active;
    else dough.class = style.description_dough;
    if (dough.disabled) dough.class = style.description_dough_disabled;
  });
  arraySize.filter((size) => {
    if (size.size == btnActiveSize) size.class = style.description_size_active;
    else size.class = style.description_size;
    if (size.disabled) size.class = style.description_size_disabled;
  });
  return (
    <>
      <div className={style.PizzaItem_desc}>
        <div className={style.PizzaItem_dough}>
          {arraydough.map((dough) => (
            <button
              className={dough.class}
              key={dough.id}
              disabled={dough.disabled}
              value={dough.text}
              onClick={handleDough}
            >
              {dough.text}
            </button>
          ))}
        </div>
        <div className={style.PizzaItem_size}>
          {arraySize.map((size) => (
            <button
              className={size.class}
              key={size.id}
              disabled={size.disabled}
              value={size.size}
              onClick={handleSize}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>
      <div className={style.price_basket}>
        <div className={style.price}>от {price} ₽</div>
        {btnActiveDough && btnActiveSize !== "" ? (
          <Button
            id={id}
            price={price}
            type={btnActiveDough}
            size={btnActiveSize}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
