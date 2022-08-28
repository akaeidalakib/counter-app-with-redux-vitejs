import { DECREMENT, INCREMENT, RESET } from "../Constants/constName";

const initialState = { count: 1 };

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:

            return {
                ...state,
                count: Math.max(state.count - 1, 1),
            };
        case RESET:

            return {
                ...state,
                count: 0,
            };

        default:
            return state;
    }
};

export default CounterReducer;