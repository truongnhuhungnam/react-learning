import { memo } from "react";

const UseCallbackChild = ({ onIncrease }) => {
    console.log("re-render!");
    return (
        <>
            <h2>Ok la</h2>
            <button onClick={onIncrease}>Click!</button>
        </>
    );
};

export default memo(UseCallbackChild);
