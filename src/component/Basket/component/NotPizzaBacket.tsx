import style from "../Basket.module.scss";
import logo from "../../../assets/imgNoPizza/logo.png";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../../../Redux/actions";

export const NotPizzaBacket = () => {
  const basketStatus = useAppSelector((State) => State.pizzaPage.openBasket);
  const dispatch = useAppDispatch();
  const closeBasket = () => {
    dispatch(actions.CloseBasket());
    dispatch(actions.clearBasket());
  };
  return (
    <div className={style.BasketNull}>
      {basketStatus && (
        <>
          <div className={style.title}>
            <h2 className={style.title_item}>Корзина пустая 😕</h2>
          </div>
          <div className={style.description}>
            <p className={style.description_item}>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br /> Для того, чтобы заказать пиццу, перейди на главную
              страницу.
            </p>
          </div>
          <div className={style.containerLogo}>
            <img src={logo} alt="logo" className={style.containerLogo_img} />
          </div>
          <div className={style.btnContainer}>
            <button className={style.btnBack} onClick={closeBasket}>
              Вернуться назад
            </button>
          </div>
        </>
      )}
    </div>
  );
};
