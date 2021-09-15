import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./CartPage.scss";

function CartPage() {
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
      delItem={() => delItem(x.id)}
      counts={counts}
    />
  ));

  const delItem = (itemId) => {
    const sss = JSON.parse(localStorage.getItem("cart"));
    sss.splice(sss.indexOf(itemId), 1);

    localStorage.setItem("cart", JSON.stringify(sss));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  return (
    <div className="galleryCart">
      {cart && <div className="galleryItems">{itemsList}</div>}
      {cart.length === 0 && <div>Корзина Пуста</div>}
    </div>
  );
}

export default CartPage;
