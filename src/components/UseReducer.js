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

// 3. Reducer
const reduce = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;

        case DOWN_ACTION:
            return state - 1;

        default:
            throw new Error("Unknown action");
    }
};

const UseReducer = () => {
    const [count, dispatch] = useReducer(reduce, initState);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </div>
    );
};

export default UseReducer;
