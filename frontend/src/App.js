import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import DetailProduct from "./components/DetailProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
