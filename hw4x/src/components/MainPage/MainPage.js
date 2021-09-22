import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import ItemList from "../ItemList/ItemList";
import { connect } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav);
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || []
  // );
  // const [fav, setFav] = useState(
  //   JSON.parse(localStorage.getItem("favourites")) || []
  // );
  const modal = useSelector((state) => state.modal);

  const addToCart = (itemId) => {
    dispatch({ type: "ADD_CART", payload: itemId });
    dispatch({ type: "SET_MODAL", payload: true });
    // setModal(!modal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          в коде сейчас много лишнего, потому что не всё работает и я не могу
          разобраться почему.
        </div>
        <div>
          в карт не ре-рендерится страница при удалении товара, хотя из локала и
          из редакса товар уходит.
        </div>
        <div>юзэффект не вызывается, хотя стейт.карт обновился.</div>
        <ItemList
          // setFav={setFav}
          fav={fav}
          addToCart={addToCart}
          // addToFavs={this.addToFavs}
          items={store}
          modal={modal}
          // setModal={setModal}
          cart={cart}
        />

        <Cart
          emptyButton={() => dispatch({ type: "DEL_CART", payload: [] })}
          icon
          className="cart"
          cart={cart.length}
        />
      </header>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state.store);
//   return {
//     store: state.store,
//   };
// };

export default MainPage;
