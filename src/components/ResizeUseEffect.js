import { useState, useEffect } from "react";

const ResizeUseEffect = () => {
    const [squareColor, setSquareColor] = useState("bg-red-500");
    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 1200
                ? setSquareColor("bg-red-900")
                : setSquareColor("bg-red-500");
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`w-[300px] h-[300px] ${squareColor}`}>
            {squareColor}
        </div>
    );
};

export default ResizeUseEffect;
