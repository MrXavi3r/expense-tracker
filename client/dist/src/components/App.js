import React from "react";
import "../App.css";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from '../context/GlobalState';
var App = function () {
    return (React.createElement(GlobalProvider, null,
        React.createElement(Header, null),
        React.createElement("div", { className: "container" },
            React.createElement(Balance, null),
            React.createElement(IncomeExpenses, null),
            React.createElement(TransactionList, null),
            React.createElement(AddTransaction, null))));
};
export default App;
