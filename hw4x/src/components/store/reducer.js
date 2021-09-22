const inititalState = {
  store: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  fav: JSON.parse(localStorage.getItem("favourites")) || [],
  modal: false,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "SET_STORE": {
      console.log("ss", action.payload);
      return { ...state, store: action.payload };
    }
    case "ADD_FAV": {
      return { ...state, fav: [...state.fav, action.payload] };
    }
    case "DEL_FAV": {
      return {
        ...state,
        fav: state.fav.filter((e) => e !== action.payload),
      };
    }
    case "ADD_CART": {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "DEL_CART": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "SET_MODAL": {
      return { ...state, modal: action.payload }; /// хотел тут написать !modal но оно не видит его
    }
    default:
      return state;
  }
};

export default reducer;
