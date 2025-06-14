import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FootToMeters from "./components/LengthComponents/FeetToMetersComponent";
import MetersToFeet from "./components/LengthComponents/MetersToFeetComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/result/meters" element={<FootToMeters />}></Route>
                <Route path="/result/foot" element={<MetersToFeet />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
