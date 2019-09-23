import { createStore } from 'redux';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';


export default (state = {orders: []}, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_CUSTOMER:
        return {
          orders: state.orders.reduce((prev, item) => {
            if (item.id !== action.payload.id)
              prev.push(item);
            return prev;
          }, [])
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
