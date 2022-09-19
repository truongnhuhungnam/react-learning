import Content from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

//Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

const UseContext = () => {
    const context = useContext(ThemeContext);

    return (
        <div>
            <button
                className="bg-black text-white px-6 py-2 mr-4"
                onClick={context.toggleTheme}
            >
                Toggle theme
            </button>
            <Content />
        </div>
    );
};

export default UseContext;
