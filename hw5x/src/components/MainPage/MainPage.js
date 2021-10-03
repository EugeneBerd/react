import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import ItemList from "../ItemList/ItemList";

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
