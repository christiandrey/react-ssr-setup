// import { createStore } from "redux";
// import root_reducer from "../reducers";

// const store = createStore(root_reducer);

// export default store;

import createSagaMiddleware from "redux-saga";
import create_root_reducer from "../reducers";
import configure_sagas from "../sagas";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { FluxStoreParams } from "../typings/state";

const sagaMiddleware = createSagaMiddleware();

export const configure_store = ({ history, initialState, middleware = [] }: FluxStoreParams) => {
    const devtools =
        typeof window !== "undefined" && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const store = createStore(create_root_reducer(history), initialState, composeEnhancers(applyMiddleware(...[sagaMiddleware, routerMiddleware(history)].concat(...middleware))));

    sagaMiddleware.run(configure_sagas);

    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept("../reducers", () => store.replaceReducer(require("../reducers").default));
        }
    }

    return store;
};

export default configure_store;
