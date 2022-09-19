import { useReducer } from "react";

// UseState
// 1. Init = 0
// 2. Action: Up (state + 1)/ Down (state -1)

// UseReducers
// 1. Init = 0
// 2. Action: Up (state + 1)/ Down (state -1)
// 3. Reducer
// 4. Dispatch
// =================================

// 1.Init
const initState = 0;

// 2. Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const RESET_ACTION = "reset";

// 3. Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;

        case DOWN_ACTION:
            return state - 1;

        case RESET_ACTION:
            return initState;

        default:
            throw new Error("Unknown action");
    }
};

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1 className="text-2xl">{count}</h1>
            <button
                onClick={() => dispatch(UP_ACTION)}
                className="bg-black text-white px-6 py-2 mr-4 font-bold"
            >
                Up
            </button>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
                className="bg-black text-white px-6 py-2 mr-4 font-bold"
            >
                Down
            </button>
            <button
                onClick={() => dispatch(RESET_ACTION)}
                className="bg-black text-white px-6 py-2 mr-4 font-bold"
            >
                Reset
            </button>
        </div>
    );
};

export default UseReducer;
