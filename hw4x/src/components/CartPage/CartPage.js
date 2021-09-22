import Modal from "../Modal/Modal";
import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const cart = useSelector((state) => state.cart);

  const store = useSelector((state) => state.store);
  useEffect(() => {
    console.log("hello", cart);
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
      setModal={() => setModal(!modal)}
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
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="galleryCart">
      {cart && (
        <div className="galleryItems">
          {itemsList}
          {modal && (
            <Modal
              header="Cart"
              text="You sure you want to delete this product from cart?"
              closeButton={true}
              handleClick={() => setModal(!modal)}
            />
          )}
        </div>
      )}
      {cart.length === 0 && <div>Корзина Пуста</div>}
    </div>
  );
}

export default CartPage;
