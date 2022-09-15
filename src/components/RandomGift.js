import React, { useState } from "react";
const RandomGift = () => {
    const gifts = ["CPU i9", "RAM 32GB", "Keyboard"];
    const [gift, setgift] = useState("Chưa có phần thưởng");
    const handleClick = () => {
        let giftIndex = Math.floor(Math.random() * gifts.length);
        setgift(gifts[giftIndex]);
    };

    return (
        <div>
            <h1>{gift}</h1>
            <button onClick={() => handleClick()}>Lấy thưởng</button>
        </div>
    );
};

export default RandomGift;
