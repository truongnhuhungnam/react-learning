import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Paragraph = () => {
    const context = useContext(ThemeContext);

    return (
        <div className={context.theme}>
            Lorem ipsum dolor sit amet, consectetur adip
        </div>
    );
};

export default Paragraph;
