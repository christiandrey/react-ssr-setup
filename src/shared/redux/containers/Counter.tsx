import Counter, { CounterProps } from "../../components/pages/Counter/Counter";
import { FluxState } from "../typings/state";
import { FluxAction } from "../typings/actions";
import { connect } from "react-redux";
import { increment_counter, decrement_counter } from "../actions/actions.counter";

const map_state_to_props: (state: FluxState) => Partial<CounterProps> = (state) => {
    return {
        value: state.counter.value,
    };
};

const map_dispatch_to_props: (dispatch: React.Dispatch<FluxAction>) => Partial<CounterProps> = (dispatch) => {
    return {
        increment_counter: () => dispatch(increment_counter()),
        decrement_counter: () => dispatch(decrement_counter()),
    };
};

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(Counter);
