var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var ActionType;
(function (ActionType) {
    ActionType["GET_TRANSACTIONS"] = "GET_TRANSACTIONS";
    ActionType["DELETE_TRANSACTION"] = "DELETE_TRANSACTION";
    ActionType["ADD_TRANSACTION"] = "ADD_TRANSACTION";
    ActionType["TRANSACTION_ERROR"] = "TRANSACTION_ERROR";
})(ActionType || (ActionType = {}));
export default (function (state, action) {
    switch (action.type) {
        case ActionType.GET_TRANSACTIONS:
            return __assign(__assign({}, state), { loading: false, transactions: action.payload });
        case ActionType.DELETE_TRANSACTION:
            return __assign(__assign({}, state), { transactions: state.transactions.filter(function (transaction) { return transaction._id !== action.payload; }) });
        case ActionType.ADD_TRANSACTION:
            return __assign(__assign({}, state), { transactions: __spreadArray(__spreadArray([], state.transactions, true), [action.payload], false) });
        case ActionType.TRANSACTION_ERROR:
            return __assign(__assign({}, state), { error: action.payload });
        default:
            return state;
    }
});
