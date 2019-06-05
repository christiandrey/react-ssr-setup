import { createMemoryHistory, createBrowserHistory } from "history";

type HistoryParams = {
    initialEntries?: any[];
};

export const create_universal_history = ({ initialEntries = [] }: HistoryParams = {}) => {
    if (__BROWSER__) {
        const history = window.browserHistory || createBrowserHistory();
        if (process.env.NODE_ENV === "development" && !window.browserHistory) {
            window.browserHistory = history;
        }
        return history;
    }
    return createMemoryHistory({ initialEntries });
};

export default create_universal_history;
