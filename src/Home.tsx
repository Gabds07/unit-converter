import { useState } from "react";
import LengthContent from "./components/LengthComponent";

function Home() {
    const [display, setDisplay] = useState(false);
    const [showOptions, setShowOptions] = useState(true);

    const handleClickLength = () => {
        setDisplay(true);
        setShowOptions(false);

        return <LengthContent />;
    };

    return (
        <div className="flex justify-center mt-50">
            <div className="bg-amber-100 h-170 w-155 p-15 rounded-lg shadow-md">
                <h1 className="text-center text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Unit Converter
                </h1>
                <button
                    onClick={handleClickLength}
                    className="items-baseline mt-15 text-2xl hover:cursor-pointer hover:text-blue-500 hover:underline border-none text-gray-800 leading-relaxed transition-colors"
                >
                    Convert Length
                </button>
                {showOptions && (
                    <h2 className="text-center mt-40 text-3xl text-gray-900 tracking-tight leading-tight">
                        Choose an option above!
                    </h2>
                )}
                <div>{display === true && <LengthContent />}</div>
            </div>
        </div>
    );
}

export default Home;
