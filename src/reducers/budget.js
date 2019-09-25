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