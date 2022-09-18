import { useState, useCallback } from "react";
import UseCallbackChild from "./UseCallbackChild";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
// - Reference types
// - React memo()

const UseCallback = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <UseCallbackChild onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
};

export default UseCallback;
