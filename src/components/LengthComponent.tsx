import { useNavigate } from "react-router-dom";

function LengthComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result");
  };

  return (
    <>
      <div className="mt-5">
        <p>Enter the length to convert</p>
        <input type="text" className="bg-white mt-1 border rounded-xs" />
      </div>
      <form>
        <div className="mt-5">
          <p className="mb-1">Unit to convert from</p>
          <input type="radio" /> <label>Ft (foot)</label>
          <input type="radio" className="ml-2" /> <label>M (meters)</label>
        </div>
      </form>
      <form>
        <div className="mt-5">
          <p className="mb-1">Unit to convert to</p>
          <input type="radio" checked /> <label>Ft (foot)</label>
          <input type="radio" className="ml-2" /> <label>M (meters)</label>
        </div>
      </form>
      <div className="mt-20 flex justify-center">
        <button
          className="bg-amber-400 p-3 rounded-2xl hover:bg-amber-300 hover:cursor-pointer"
          onClick={handleClick}
        >
          Convert
        </button>
      </div>
    </>
  );
}

export default LengthComponent;
