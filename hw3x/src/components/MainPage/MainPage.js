import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import ItemList from "../ItemList/ItemList";

const MainPage = () => {
  const [pricelist, setPricelist] = useState(
    JSON.parse(localStorage.getItem("store")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get("/price.json").then((res) => {
      setPricelist(res.data);
      localStorage.setItem("store", JSON.stringify(res.data));
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("favourites", JSON.stringify(fav));
      console.log(fav);
    });
  }, [cart, fav]);

  const addToCart = (itemId) => {
    setCart([...cart, itemId]);
    setModal(!modal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ItemList
          setFav={setFav}
          fav={fav}
          addToCart={addToCart}
          // addToFavs={this.addToFavs}
          items={pricelist}
          modal={modal}
          setModal={() => setModal(!modal)}
          cart={cart}
        />
        <Link className="nav-link" exact to="/cart" activeClassName="selected">
          <Cart
            emptyButton={() => setCart([])}
            icon
            className="cart"
            cart={cart.length}
          />
        </Link>
      </header>
    </div>
  );
};

export default MainPage;
