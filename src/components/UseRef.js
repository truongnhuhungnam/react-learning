import { useState, useRef, useEffect } from "react";

// Lưu các giá trị qua 1 tham chiếu bên ngoài
// function component

const UseRef = () => {
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.curent = count;
    }, [count]);

    useEffect(() => {
      console.log(h1Ref.current);
    })
    
    
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
    };
    
    const handleStop = () => {
        clearInterval(timerId.current);
    };
    
    console.log(count + "..." + prevCount.curent);

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default UseRef;
