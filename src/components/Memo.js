import { useState } from "react";
import MemoChild from "./MemoChild";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
const Memo = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleClick2 = () => {
        setCount2(count + 1);
    };

    return (
        <div>
            <MemoChild count={count} />
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={handleClick}>Click!</button>
            <button onClick={handleClick2}>Click 2!</button>
        </div>
    );
};

export default Memo;
