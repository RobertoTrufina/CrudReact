import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import NewRegister from "./pages/NewRegister";

export default function ProjectRoute() {
    return (
        <>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/nova-senha" element={<NewPassword />} />
                <Route path="/cadastro-de-investidor" element={<NewRegister />} />
            </Routes>
        </BrowserRouter>

        
        </>
    )
}