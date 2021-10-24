import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utils/format';
export var Transaction = function (_a) {
    var transaction = _a.transaction;
    var deleteTransaction = useContext(GlobalContext).deleteTransaction;
    var sign = transaction.amount < 0 ? "-" : "+";
    return (React.createElement("li", { className: transaction.amount < 0 ? "minus" : "plus" },
        transaction.text,
        React.createElement("span", null,
            sign,
            "$",
            numberWithCommas(Math.abs(transaction.amount))),
        React.createElement("button", { onClick: function () { return deleteTransaction(transaction._id); }, className: "delete-btn" }, "x")));
};
