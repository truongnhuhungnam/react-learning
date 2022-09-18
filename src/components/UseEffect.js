import { useEffect, useState } from "react";

// 1. useEffect(callback)
// Gọi callback mỗi khi component re-render

// 2. useEffect(callback, [])
// Chỉ gọi cakkback 1 lần sau khi component mounted

// 3. useEffect(callback, [deps])
// Callback sẽ dc gọi lại mỗi khi dép thay đổi

// Callback luôn dc gọi sau khi component dc mount
// Cleanup function luôn được gọi trước khi component unmount
// Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

const tabs = ["posts", "comments", "albums"];

const UseEffect = () => {
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [showToTop, setShowToTop] = useState(false);

    useEffect(() => {
        // console.log("Type changed");
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            // window.scrollY >= 200 ? setShowToTop(true) : setShowToTop(false);
            setShowToTop(window.scrollY >= 200);
        };

        window.addEventListener("scroll", handleScroll);
        console.log("addEventListener");

        return () => {
            window.removeEventListener("scroll", handleScroll);
            console.log("removeEventListener");
        };
    }, []);

    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className="bg-black text-white border border-black hover:bg-transparent hover:text-black px-6 py-2 mr-4 font-bold"
                    style={type === tab ? { color: "red" } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showToTop && (
                <div className="fixed bottom-0.5 right-0.5 bg-red-500 text-white border py-2 px-4">
                    ToTop
                </div>
            )}
        </div>
    );
};

export default UseEffect;
