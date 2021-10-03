import Modal from "../Modal/Modal";
import React, { useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const modal = useSelector((state) => state.modal);

  const store = useSelector((state) => state.store);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const res = store.filter((item) => cart.includes(item.id));

  const counts = {};
  cart.forEach((x, i) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const itemsList = res.map((x) => (
    <ItemCard
      item={x}
      key={x.id}
      setModal={() => dispatch({ type: "SET_MODAL", payload: false })}
      delItem={() => delItem(x.id)}
      counts={counts}
    />
  ));

  const delItem = (itemId) => {
    //old - working

    // const oldcart = JSON.parse(localStorage.getItem("cart"));
    // oldcart.splice(oldcart.indexOf(itemId), 1); /// удаляем из массива один элемент, возвращаем олдкарт как массив без этого элемента

    // localStorage.setItem("cart", JSON.stringify(oldcart)); /// записываем его в локаль

    //new - not working
    cart.splice(cart.indexOf(itemId), 1);
    dispatch({ type: "DEL_CART", payload: cart }); // по коду то же самое, идем в редюсер >>>

    dispatch({ type: "SET_MODAL", payload: true });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="galleryCart">
      <Form />
      <div>
        {cart && (
          <div className="cartItems">
            {itemsList}
            {modal && (
              <Modal
                header="Cart"
                text="Item deleted from cart"
                closeButton={true}
                handleClick={() =>
                  dispatch({ type: "SET_MODAL", payload: false })
                }
                actions={
                  <button
                    onClick={() => {
                      dispatch({ type: "SET_MODAL", payload: false });
                    }}
                  >
                    thanks!
                  </button>
                }
              />
            )}
          </div>
        )}
        {cart.length === 0 && <div>Корзина Пуста</div>}
      </div>
    </div>
  );
}

export default CartPage;
