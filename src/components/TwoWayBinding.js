import React, { useState } from "react";
const TwoWayBinding = () => {
    const [gift, setgift] = useState("Chưa có phần thưởng");
    const gifts = ["CPU i9", "RAM 32GB", "Keyboard"];
    const handleClick = () => {
        let giftId = Math.floor(Math.random() * 3);
        setgift(gifts[giftId]);
    };

    return (
        <div>
            <h1>{gift}</h1>
            <button onClick={() => handleClick()}>Lấy thưởng</button>
        </div>
    );
};

export default TwoWayBinding;
