import { useState, createContext } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("text-black");

    const toggleTheme = () => {
        setTheme(theme === "text-black" ? "text-red-500" : "text-black");
    };

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
