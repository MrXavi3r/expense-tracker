import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
export var TransactionList = function () {
    var _a = useContext(GlobalContext), transactions = _a.transactions, getTransactions = _a.getTransactions;
    useEffect(function () {
        getTransactions();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("h3", null, "Recent Activity"),
        React.createElement("ul", { className: "list" }, transactions.map(function (transaction) { return (React.createElement(Transaction, { key: transaction._id, transaction: transaction })); }))));
};
