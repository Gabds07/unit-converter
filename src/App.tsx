import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./components/ResultComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/result/meters" element={<Result />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
