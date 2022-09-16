import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import BmiCalculator from "./pages/BmiCalculator";
import NoPage from "./pages/NoPage";
import Healthy from "./pages/Healthy";
import Obesity from "./pages/Obesity";
import UnderWeight from "./pages/UnderWeight";
import OverWeight from "./pages/Overweight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bmi" element={<Bmi />} />
            <Route path="calculate" element={<BmiCalculator />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/healthy" element={<Healthy />} />
            <Route path="/over-weight" element={<OverWeight />} />
            <Route path="/under-weight" element={<UnderWeight />} />
            <Route path="/obesity" element={<Obesity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
