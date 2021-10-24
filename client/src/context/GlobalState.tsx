import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { ActionType } from "./AppReducer";
import axios from "axios";

export interface iTransaction {
  text: string;
  amount: number;
  _id: number;
}

export interface IState {
  transactions: {
    _id: number;
    text: string;
    amount: number;
  }[];
  error: null;
  loading: boolean;
  addTransaction: (transaction: iTransaction) => void;
  getTransactions: () => void;
  deleteTransaction: (id: number) => void;
}

//init state
const initialState: IState = {
  transactions: [],
  error: null,
  loading: true,
  addTransaction: (transaction: iTransaction) => {},
  getTransactions: () => {},
  deleteTransaction: (id: number) => {},
};

// create context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions(): Promise<void> {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: ActionType.GET_TRANSACTIONS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.TRANSACTION_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  }

  async function deleteTransaction(id: number): Promise<void> {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: ActionType.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ActionType.TRANSACTION_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  }

  async function addTransaction(transaction: iTransaction): Promise<void> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `/api/v1/transactions/`,
        transaction,
        config
      );

      dispatch({
        type: ActionType.ADD_TRANSACTION,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.TRANSACTION_ERROR,
        payload: (error as any).response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
        deleteTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
