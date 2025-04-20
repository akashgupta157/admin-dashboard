import "./index.css";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
);
