import { History } from "history";

// ----------------------------------------------------------------
// GLOBAL STATE
// ----------------------------------------------------------------

export interface FluxState {
    counter: CounterFluxState;
}

// ----------------------------------------------------------------
// STORE PARAMS
// ----------------------------------------------------------------

export interface FluxStoreParams {
    history: History;
    initialState?: { [key: string]: any };
    middleware?: any[];
}

// ----------------------------------------------------------------
// INDIVIDUAL STATES
// ----------------------------------------------------------------
export interface CounterFluxState {
    value: number;
}
