import { useState } from "react";
import UseContext from "./components/useContext/UseContext";
import { ThemeProvider } from "./components/useContext/ThemeContext";

function App() {
    const [show, setShow] = useState(false);
    return (
        <ThemeProvider>
            <div className="App">
                <div className="container mx-auto py-8">
                    <button
                        className="bg-black text-white border border-black hover:bg-transparent hover:text-black px-6 py-2"
                        onClick={() => setShow(!show)}
                    >
                        Toggle
                    </button>
                    {show && <UseContext />}
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
