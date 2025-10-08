import { Routes, Route, Navigate } from "react-router-dom";
import { TablePage } from "@/pages/TablePage/TablePage.tsx";

export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/table" />} />
        <Route path="/table" element={<TablePage />} />
    </Routes>
);
