import { Routes, Route } from "react-router-dom";

import WhoIAm from "./pages/WhoIAm";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WhoIAm />} />
      <Route path="/engineer" element={<Landing />} />
    </Routes>
  );
}