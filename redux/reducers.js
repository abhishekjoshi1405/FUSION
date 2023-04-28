import {
  SET_FOOD_ITEMS,
  GET_USER_INFO,
  SET_USER_INFO,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FOOD_ITEMS,
  ADD_CART,
} from './actions';

const initialState = {
  userInfo: {},
  foodItems: [],
  cartItems: [],
  totalPrice: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      console.log('USer Info to be logged is stored', action);
      return {...state, userInfo: action.payload};
    // case GET_USER_INFO:
    //   console.log('Getting USer Info');
    //   return;
    case SET_FOOD_ITEMS:
      console.log('Setting Food Items as per categories selected', action);
      return {...state, foodItems: action.payload};
    // case INCREASE_QUANTITY:
    //   console.log('Increasing Quantity');
    //   return;
    // case DECREASE_QUANTITY:
    //   console.log('Decreasing Quantity');
    //   return;
    // case REMOVE_FOOD_ITEMS:
    //   console.log('Clear all Items');
    //   return;
    case ADD_CART:
      console.log('Adding to Cart', action.payload);
      console.log('Current State', state.cartItems.length);
      console.log('Current State', state.cartItems);
      if (state.cartItems.length == 0) {
        const newFood = {...action.payload, quantity: 1};
        return {
          ...state,
          cartItems: [newFood],
          totalPrice: parseFloat(action.payload.price),
        };
      } else {
        const selItem = state.cartItems.find(item => {
          return item.name === action.payload.name;
        });
        if (!selItem) {
          console.log('New item to be added');
          const newFood = {...action.payload, quantity: 1};
          const newPrice =
            parseFloat(state.totalPrice) + parseFloat(action.payload.price);
          return {
            ...state,
            cartItems: [...state.cartItems, newFood],
            totalPrice: newPrice,
          };
        } else {
          console.log('Item already in inventory', state);
          console.log('Item already in inventory', selItem);
          const updateQty1 = state.cartItems.map(item =>
            item.name === selItem.name
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  price: parseFloat(item.price) + parseFloat(item.price),
                }
              : item,
          );
          const totalPrice =
            state.totalPrice + parseFloat(action.payload.price);

          return {...state, cartItems: updateQty1, totalPrice: totalPrice};
        }
      }
    default:
      return state;
  }
};

export default appReducer;
