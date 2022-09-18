import { useState, useMemo, useRef } from "react";

// Dùng để tránh thực hiện lại 1 đoạn logic tính toán không cần thiết
const UseMemo = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name,
                price: +price, //price type default là string, nên chuyển thành number
            },
        ]);
        setName("");
        setPrice("");

        nameRef.current.focus();
    };

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log("Tính toán lại...");
            return result + prod.price;
        }, 0);

        return result;
    }, [products]);

    return (
        <div>
            <input
                ref={nameRef}
                type="text"
                value={name}
                placeholder="Enter Name..."
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={price}
                placeholder="Enter Price..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <button
                className="bg-black text-white border border-black hover:bg-transparent hover:text-black px-6 py-2"
                onClick={handleSubmit}
            >
                Add
            </button>
            <p>Total: {total}</p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseMemo;
