import { useLocation } from "react-router-dom";

function MetersToFeet() {
    const location = useLocation();
    const value = location.state?.value;

    const metersToFeet = (meters: string) => {
        const result = Number(meters) * 3.281;
        return result;
    };

    return (
        <div className="flex justify-center mt-50">
            <div className="bg-amber-100 h-130 w-120 p-15 rounded-lg shadow-md">
                <h1 className="text-5xl text-center font-extrabold text-gray-900">
                    Result
                </h1>
                <h2 className="text-center mt-40 text-3xl text-gray-900 tracking-tight leading-tight">
                    {String(metersToFeet(value).toFixed(3)).replace(".", ",")}{" "}
                    <span className="font-semibold">feet</span>
                </h2>
                <p className="text-center mt-8 text-lg text-gray-700">
                    Done! The value was converted with success.
                </p>
            </div>
        </div>
    );

}

export default MetersToFeet;