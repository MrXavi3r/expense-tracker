import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utils/format';
export var IncomeExpenses = function () {
    var transactions = useContext(GlobalContext).transactions;
    var amounts = transactions.map(function (transaction) { return transaction.amount; });
    var income = amounts
        .filter(function (item) { return item > 0; })
        .reduce(function (acc, item) { return (acc += item); }, 0)
        .toFixed(2);
    var expense = (amounts.filter(function (item) { return item < 0; }).reduce(function (acc, item) { return (acc += item); }, 0) *
        -1).toFixed(2);
    return (React.createElement("div", { className: "inc-exp-container" },
        React.createElement("div", null,
            React.createElement("h4", null, "Income"),
            React.createElement("p", { className: "money plus" },
                "$",
                numberWithCommas(income))),
        React.createElement("div", null,
            React.createElement("h4", null, "Expenses"),
            React.createElement("p", { className: "money minus" },
                "$",
                numberWithCommas(expense)))));
};
