import { AnyAction } from "redux";
import ActionTypes from "../constants/action_types";

export interface FluxAction extends AnyAction {
	type: keyof typeof ActionTypes;
}

export interface FluxAction<T0 = any> extends AnyAction {
	type: keyof typeof ActionTypes;
	payload?: T0;
}

export interface FluxAction<T0 = any, T1 = any> extends AnyAction {
	type: keyof typeof ActionTypes;
	payload?: T0;
	payload_1?: T1;
}

export interface FluxAction<T0 = any, T1 = any, T2 = any> extends AnyAction {
	type: keyof typeof ActionTypes;
	payload?: T0;
	payload_1?: T1;
	payload_2?: T2;
}
