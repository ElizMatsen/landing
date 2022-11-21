import React from 'react';
import Header from "../header/Header";
import Business from "../business/Business";
import {Route, Routes} from 'react-router-dom';
import Footer from "../footer/Footer";

const Layout = () => {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="wrapper__body">
                    <Routes>
                        <Route path="business" element={<Business/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </>
    )
};

export default Layout;

