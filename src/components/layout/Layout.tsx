import React from 'react';
import Header from "../header/Header";
import Business from "../business/Business";
import {Route, Routes} from 'react-router-dom';

const Layout = () => {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path="business" element={<Business/>}/>
                </Routes>
            </div>
        </>
    )
};

export default Layout;

