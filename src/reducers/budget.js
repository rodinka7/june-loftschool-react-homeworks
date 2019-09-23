import { createStore, combineReducers } from 'redux';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';


export default (state = {deliveryExpanse: 0, profit: 0, farmExpanse: 0}, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse + 20 
      };
    case CREATE_ORDER:
        return {
          ...state,
          profit: state.profit + action.payload.price 
        };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse + 100
      }
    default:
      return state;
  }
};





// const rootReducer = combineReducers({
//   entities: entities,
//   people: combineReducers({
//     lection: lection,
//     total: total,
//     users: users,
//   }),
// });

// const store = createStore(rootReducer);

// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });

// const addUser = (id, name) => ({
//   type: 'ADD_USER',
//   payload: {
//     id,
//     name,
//   },
// });

// store.dispatch(addUser(1, 'Артём 1'));
// store.dispatch(addUser(2, 'Артём 2'));
// store.dispatch(addUser(3, 'Артём 3'));

// initial action -> reducers
// users -> [] users: []
// products -> []
// {
//    products: []
//
// }

// products(state.products, action)
// users(state.users, action)
