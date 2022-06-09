import { FC, useEffect, useState } from "react";
import { useAppSelector } from "./hooks";
import { Header, Basket, Pizza } from "./component";

const App: FC = () => {
  const pizza = useAppSelector((State) => State.pizzaPage.pizzas);
  const category = useAppSelector((State) => State.pizzaPage.category);
  const basketStatus = useAppSelector((State) => State.pizzaPage.openBasket);
  const pizzaBacket = useAppSelector((State) => State.pizzaPage.pizzaBacket);
  const [title, setTitle] = useState("");
  const variantTitle: Array<string> = [
    "Все пиццы",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const variantCategory: Array<number> = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    variantCategory.forEach((item: number) => {
      if (category == item) setTitle(variantTitle[item]);
    });
  }, [category]);
  return (
    <div className="App">
      <Header basketStatus={basketStatus} />
      {basketStatus ? (
        <Basket pizza={pizzaBacket} />
      ) : (
        <Pizza pizza={pizza} title={title} />
      )}
    </div>
  );
};

export default App;
