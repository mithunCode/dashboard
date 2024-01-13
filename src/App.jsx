import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
