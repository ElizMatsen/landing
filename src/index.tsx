import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loader from "./components/loader/Loader";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>
);
reportWebVitals();
