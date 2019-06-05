import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { counter } from "./all/counter";
import { History } from "history";

const create_root_reducer = (history: History) => {
    return combineReducers({ counter, router: connectRouter(history) });
};

export default create_root_reducer;
