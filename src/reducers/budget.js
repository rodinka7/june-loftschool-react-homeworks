import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

export default (
  state = { profit: 0, deliveryExpanse: 0, farmExpanse: 0, marketExpanse: 0 },
  action
) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, profit: state.profit + action.payload.price, marketExpanse: state.marketExpanse + 20 };
    case MOVE_ORDER_TO_FARM:
      return { ...state, farmExpanse: state.farmExpanse + 100 };
    case MOVE_ORDER_TO_CUSTOMER:
      return { ...state, deliveryExpanse: state.deliveryExpanse + 20 };
    default:
      return state;
  }
};