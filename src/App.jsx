import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import Fleamarket from "./pages/fleamarket.jsx";
import Nearbystores from "./pages/nearbystores.jsx";
import Jobs from "./pages/jobs.jsx";
import Realty from "./pages/realty.jsx";
import Car from "./pages/car.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fleamarket" element={<Fleamarket />} />
        <Route path="/nearbystores" element={<Nearbystores />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/realty" element={<Realty />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
