import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_CUSTOMER:
        return {
          ...state,
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
