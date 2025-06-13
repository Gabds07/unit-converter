import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();
    const value = location.state?.value;

    const feetToMeters = (foot: string) => {
        const result = Number(foot) / 3.281;
        return result;
    };

    return (
        <div className="flex justify-center mt-50">
            <div className="bg-amber-100 h-160 w-135 p-15 rounded-lg shadow-md">
                <h1 className="text-5xl text-center font-extrabold text-gray-900">
                    Result
                </h1>
                <h2 className="text-center mt-40 text-3xl text-gray-900 tracking-tight leading-tight">
                    {String(feetToMeters(value).toFixed(3)).replace(".", ",")}{" "}
                    <span className="font-semibold">meters</span>
                </h2>
                <p className="text-center mt-8 text-lg text-gray-700">
                    Done! The value was converted with success.
                </p>
            </div>
        </div>
    );
}

export default Result;
