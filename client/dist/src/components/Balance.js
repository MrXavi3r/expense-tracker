import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utils/format';
export var Balance = function () {
    var transactions = useContext(GlobalContext).transactions;
    var amounts = transactions.map(function (transaction) { return transaction.amount; });
    var total = amounts.reduce(function (acc, item) { return (acc += item); }, 0).toFixed(2);
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", null, "Your Balance"),
        React.createElement("h1", null,
            "$",
            numberWithCommas(total))));
};
