import { IState } from "./GlobalState";

export enum ActionType {
  GET_TRANSACTIONS = "GET_TRANSACTIONS",
  DELETE_TRANSACTION = "DELETE_TRANSACTION",
  ADD_TRANSACTION = "ADD_TRANSACTION",
  TRANSACTION_ERROR = "TRANSACTION_ERROR",
}

type Action = {
  type: ActionType;
  payload: any;
};

export default (state: IState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case ActionType.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case ActionType.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case ActionType.TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
