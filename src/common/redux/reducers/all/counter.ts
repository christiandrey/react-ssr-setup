import { CounterFluxState } from "app/redux/typings/state";
import { FluxAction } from "app/redux/typings/actions";

const initial_state = {
	value: 0
} as CounterFluxState;

export function counter(state: CounterFluxState = initial_state, action: FluxAction) {
	const { type, payload, payload_1, payload_2 } = action;

	if (type === "INCREMENT_COUNTER") {
		state = { value: state.value + 1 };
	}

	if (type === "DECREMENT_COUNTER") {
		state = { value: state.value - 1 };
	}

	return state;
}
