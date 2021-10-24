import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export var AddTransaction = function () {
    var _a = useState(""), text = _a[0], setText = _a[1];
    var _b = useState(0), amount = _b[0], setAmount = _b[1];
    var addTransaction = useContext(GlobalContext).addTransaction;
    var onSubmit = function (e) {
        e.preventDefault();
        var newTransaction = {
            _id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount,
        };
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h3", null, "Add new transaction"),
        React.createElement("form", { onSubmit: onSubmit },
            React.createElement("div", { className: "form-control" },
                React.createElement("label", { htmlFor: "text" }, "Text"),
                React.createElement("input", { type: "text", value: text, onChange: function (e) { return setText(e.target.value); }, placeholder: "Enter text..." })),
            React.createElement("div", { className: "form-control" },
                React.createElement("label", { htmlFor: "amount" },
                    "Amount ",
                    React.createElement("br", null),
                    "(negative - expense, positive - income)"),
                React.createElement("input", { type: "number", value: amount, onChange: function (e) { return setAmount(Number(e.target.value)); }, placeholder: "Enter amount..." })),
            React.createElement("button", { type: "submit", className: "btn" }, "Add transaction"))));
};
