import Modal from "../Modal/Modal";
import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./CartPage.scss";

function CartPage() {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.getItem("cart", JSON.stringify(cart));
  }, [cart]);

  const store = JSON.parse(localStorage.getItem("store")),
    res = store.filter((item) => cart.includes(item.id));

  const counts = {};
  cart.forEach((x, i) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const itemsList = res.map((x) => (
    <ItemCard
      fav="sss"
      item={x}
      key={x.id}
      setModal={() => setModal(!modal)}
      delItem={() => delItem(x.id)}
      counts={counts}
    />
  ));

  const delItem = (itemId) => {
    const getCart = JSON.parse(localStorage.getItem("cart"));
    getCart.splice(getCart.indexOf(itemId), 1);

    localStorage.setItem("cart", JSON.stringify(getCart));
    setCart(JSON.parse(localStorage.getItem("cart")));
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
