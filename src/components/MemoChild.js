import { memo } from "react";

const MemoChild = ({ count }) => {
    console.log("re-render!");
    return <div>MemoChild {count}</div>;
};

export default memo(MemoChild);
