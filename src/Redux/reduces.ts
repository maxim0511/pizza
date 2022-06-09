import { SetStateAction } from "react";
import { ActionsType, pizzaType } from "../type/types";

const initialState = {
  pizzas: [] as Array<pizzaType>,
  pizzaBacket: [] as Array<pizzaType>,
  priceBacket: 0,
  price: 0,
  count: 1,
  openBasket: false,
  sortOption: "" as SetStateAction<string>,
  category: 0,
  ArrayTypes: [] as Array<ArrayTypes>,
};
export const pizzaReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "Set_Pizzas":
      return { ...state, pizzas: action.pizzas };
    case "SET_BUCKET":
      return {
        ...state,
        pizzaBacket: [...state.pizzaBacket, ...action.pizzaBacket],
        priceBacket: action.price,
      };
    case "Set_Price":
      return { ...state, price: state.price + action.price };
    case "Set_Price_Minus":
      return { ...state, price: state.price - action.price };
    case "Open_Basket":
      return { ...state, openBasket: true };
    case "Close_Basket":
      return { ...state, openBasket: false };
    case "Clear_Basket":
      return { ...state, pizzaBacket: [], price: 0 };
    case "Delete_Item":
      let newPrice = 0;
      const filteringPizzasBasket = state.pizzaBacket.filter(
        (el: pizzaType) => el.id !== action.id
      );
      filteringPizzasBasket.map((el: pizzaType) => (newPrice += el.price));
      return {
        ...state,
        pizzaBacket: filteringPizzasBasket,
        price: newPrice,
      };
    case "Sort_Pizza":
      const data = {
        ...state,
        sortOption: action.value,
      };
      if (action.value == "price") {
        Object.assign(data, {
          pizzas: state.pizzas.sort((a, b) => {
            return a.price - b.price;
          }),
        });
      }
      if (action.value == "popular") {
        Object.assign(data, {
          pizzas: state.pizzas.sort((a, b) => {
            return a.rating - b.rating;
          }),
        });
      }
      if (action.value == "alphabet") {
        const sortArray = state.pizzas.sort((a, b) => {
          let nameA = a.name.toLowerCase();
          let nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        Object.assign(data, { pizzas: sortArray });
      }
      if (state.category || state.category == 0) {
        const sortPizza = state.pizzas.filter(
          (el) => el.category == state.category
        );
        data.pizzas = sortPizza;
        if (state.category == 0) {
          const sortPizza = state.pizzas.filter(
            (el) => el.category !== state.category
          );
          data.pizzas = sortPizza;
        }
      }
      return data;
    case "Sort_Pizza_btn":
      const payload = {
        ...state,
        category: action.category,
      };
      if (action.category == 0)
        Object.assign(payload, { pizzas: state.pizzas });
      else
        Object.assign(payload, {
          pizzas: state.pizzas.filter((el) => el.category == action.category),
        });
      return payload;
    case "Set_desc":
      return {
        ...state,
        ArrayTypes: [...state.ArrayTypes, ...action.payload],
      };
    default:
      return state;
  }
};

export type InitialStateType = typeof initialState;
type ArrayTypes = {
  id: number;
  size: string | undefined;
  types: string | undefined;
};
