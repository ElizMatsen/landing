import React from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import Business from "./components/business/Business";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="business" element={<Business/>}/>
                </Route>
                <Route path="*" element={<Navigate replace to="/business"/>}/>
            </Routes>
        </>
    );
}

export default App;
