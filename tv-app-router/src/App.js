import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SelectedApp from "./SelectedApp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app/:name" element={<SelectedApp />} />
    </Routes>
  );
}