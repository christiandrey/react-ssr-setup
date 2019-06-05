import { FluxAction } from "../typings/actions";

export function increment_counter(): FluxAction {
	return {
		type: "INCREMENT_COUNTER"
	};
}

export function decrement_counter(): FluxAction {
	return {
		type: "DECREMENT_COUNTER"
	};
}
