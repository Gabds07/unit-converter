import { useState, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

function LengthComponent() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const handleClick = () => {
        if (inputValue === "") return;
        if (selectedValue === "foot")
            navigate("/result/meters", { state: { value: inputValue } });
        else if (selectedValue === "meters")
            navigate("/result/foot", { state: { value: inputValue } });
    };

    const handleInputChange = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setInputValue(e.target.value);
    };

    const handleRadioCHange = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <div className="mt-10">
                <p className="text-center items-baseline text-2xl text-gray-800 leading-relaxed">
                    Type a value to convert ✨
                </p>
                <input
                    type="number"
                    placeholder="Ex: 10"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200 text-gray-800 placeholder-gray-400 transition mt-2"
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </div>
            <form>
                <div className="mt-5">
                    <p className="mb-1 font-semibold">Convert from:</p>
                    <input
                        type="radio"
                        value="foot"
                        checked={selectedValue === "foot"}
                        onChange={handleRadioCHange}
                        name="foot"
                    />{" "}
                    <label>Ft (Foot)</label>
                    <input
                        type="radio"
                        name="meters"
                        className="ml-2"
                        value="meters"
                        checked={selectedValue === "meters"}
                        onChange={handleRadioCHange}
                    />{" "}
                    <label>M (Meters)</label>
                </div>
            </form>

            <p className="mt-5 font-semibold">
                To:{" "}
                {selectedValue === "meters"
                    ? "Foot"
                    : selectedValue === "foot"
                    ? "Meters"
                    : "Select the length measurement"}
            </p>

            <div className="mt-20 flex justify-center">
                <button
                    className="mt-5 bg-gradient-to-r from-amber-400 to-yellow-300 p-3 rounded-2xl hover:from-amber-300 hover:to-yellow-200 hover:cursor-pointer font-bold text-lg shadow"
                    onClick={handleClick}
                    type="button"
                >
                    Convert
                </button>
            </div>
        </>
    );
}

export default LengthComponent;
