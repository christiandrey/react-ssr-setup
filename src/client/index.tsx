import React from "react";
import configure_store from "../common/redux/store";
import create_universal_history from "../common/redux/store/history";
import Counter from "../common/redux/containers/Counter";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";

const history = create_universal_history();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
    window.store ||
    configure_store({
        initialState: window.__PRELOADED_STATE__,
        history,
    });

hydrate(
    <Provider store={store}>
        <Router history={history}>
            <Counter />
        </Router>
    </Provider>,
    document.getElementById("app")
);

if (process.env.NODE_ENV === "development") {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store) {
        window.store = store;
    }
}
