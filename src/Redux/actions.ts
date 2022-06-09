import { pizzaType, ThunkType } from "../type/types";
import pizzaContent from "../pizza.json";
import { SetStateAction } from "react";

export const actions = {
  setPizzas: (pizzas: Array<pizzaType>) =>
    ({ type: "Set_Pizzas", pizzas } as const),
  setBacket: (pizzaBacket: Array<pizzaType>, price: number) =>
    ({
      type: "SET_BUCKET",
      pizzaBacket,
      price,
    } as const),
  OpenBasket: () => ({ type: "Open_Basket" } as const),
  CloseBasket: () => ({ type: "Close_Basket" } as const),
  clearBasket: () => ({ type: "Clear_Basket" } as const),
  setPrice: (price: number) => ({ type: "Set_Price", price } as const),
  setPriceMinus: (price: number) =>
    ({ type: "Set_Price_Minus", price } as const),
  deletetItemBasket: (id: number, price: number) =>
    ({ type: "Delete_Item", id, price } as const),
  sortPizza: (value: SetStateAction<string>) =>
    ({ type: "Sort_Pizza", value } as const),
  sortPizzaButton: (category: number) =>
    ({ type: "Sort_Pizza_btn", category } as const),
  setDescriptionPizzaBasket: (
    id: number,
    types: string | undefined,
    size: string | undefined
  ) => ({ type: "Set_desc", payload: [{ id, types, size }] } as const),
};
const basket: Array<pizzaType | undefined> = [];
export const pizzaThunk =
  (id?: number, types?: string, size?: string): ThunkType =>
  async (dispatch) => {
    const response = pizzaContent.pizzas;
    let price = 0;
    if (id == 0 || id) {
      const filtering = response.filter((el) => el.id == id);
      basket.push(response.find((el) => el.id == id));
      basket.map((el) => (el ? (price = el.price) : ""));
      dispatch(actions.setBacket(filtering, price));
      dispatch(actions.setPrice(price));
      dispatch(actions.setDescriptionPizzaBasket(id, types, size));
    } else dispatch(actions.setPizzas(response));
  };
