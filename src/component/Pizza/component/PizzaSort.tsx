import { FC, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { actions, pizzaThunk } from "../../../Redux/actions";
import style from "../Pizza.module.scss";
import { optionArray } from "./helper";

export const PizzaSort: FC = () => {
  const dispatch = useAppDispatch();
  const [option, setValueOption] = useState("default");
  const [btnActive, setActiveBtn] = useState("Все");
  const btnArray = [
    {
      id: 1,
      value: "Все",
      class: style.sortTaste_item,
      disabled: false,
      category: 0,
    },
    {
      id: 2,
      value: "Мясные",
      class: style.sortTaste_item,
      disabled: false,
      category: 1,
    },
    {
      id: 3,
      value: "Вегетарианская",
      class: style.sortTaste_item,
      disabled: false,
      category: 2,
    },
    {
      id: 4,
      value: "Гриль",
      class: style.sortTaste_item,
      disabled: false,
      category: 3,
    },
    {
      id: 5,
      value: "Острые",
      class: style.sortTaste_item,
      disabled: false,
      category: 4,
    },
    {
      id: 6,
      value: "Закрытые",
      class: style.sortTaste_item,
      disabled: false,
      category: 5,
    },
  ];

  btnArray.filter((button) => {
    if (button.value == btnActive) {
      button.class = style.sortTaste_item_active;
      button.disabled = true;
    } else button.class = style.sortTaste_item;
  });
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValueOption(event.target.value);
    dispatch(pizzaThunk());
    dispatch(actions.sortPizza(event.target.value));
  };
  const handleChangeBtn = (event: any) => {
    setActiveBtn(event.target.value);
    btnArray.find((button) => {
      if (button.value == event.target.value) {
        dispatch(pizzaThunk());
        dispatch(actions.sortPizzaButton(button.category));
      }
    });
  };

  useEffect(() => {
    dispatch(pizzaThunk());
  }, []);
  return (
    <div className={style.sortContainer}>
      <div className={style.sortTaste}>
        {btnArray.map((btn) => (
          <button
            className={btn.class}
            key={btn.id}
            onClick={handleChangeBtn}
            value={btn.value}
            disabled={btn.disabled}
          >
            {btn.value}
          </button>
        ))}
      </div>
      <div className={style.sortSelect}>
        <p className={style.sortSelect_title}>Сортировка по:</p>
        <select
          className={style.sortSelect_option}
          value={option}
          onChange={handleChange}
        >
          {optionArray.map((option) => (
            <option
              value={option.value}
              disabled={option.disadled}
              key={option.id}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
