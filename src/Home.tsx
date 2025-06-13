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
      <div className="bg-amber-100 h-150 w-120 p-15 rounded-lg shadow-md">
        <h1 className="text-5xl text-center">Unit Converter</h1>
        <button
          onClick={handleClickLength}
          className="items-baseline mt-15 text-2xl hover:cursor-pointer hover:text-blue-500 hover:underline border-none"
        >
          Length
        </button>
        {showOptions && (
          <h1 className="text-center mt-30 text-4xl">
            Select one option above.
          </h1>
        )}
        <div>{display === true && <LengthContent />}</div>
      </div>
    </div>
  );
}

export default Home;
