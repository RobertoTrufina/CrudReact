import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewRegister from "./pages/NewRegister";

export default function ProjectRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NewRegister />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}