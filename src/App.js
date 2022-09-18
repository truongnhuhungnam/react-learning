import { useState } from "react";
import UseLayoutEffect from "./components/UseLayoutEffect";

function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <div className="container mx-auto py-8">
                <button
                    className="bg-black text-white border border-black hover:bg-transparent hover:text-black px-6 py-2"
                    onClick={() => setShow(!show)}
                >
                    Toggle
                </button>
                {show && <UseLayoutEffect />}
            </div>
        </div>
    );
}

export default App;
