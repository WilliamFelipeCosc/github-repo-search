import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CommitPage from "../pages/CommitPage/CommitPage";
import Home from "../pages/Home";

function NavRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commits" element={<CommitPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavRouter
