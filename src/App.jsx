import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Fleamarket from "./pages/fleamarket";
import Nearbystores from "./pages/nearbystores";
import Jobs from "./pages/jobs";
import Realty from "./pages/realty";
import Car from "./pages/car";

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
