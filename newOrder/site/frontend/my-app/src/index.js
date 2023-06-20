import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomieNigga from './HomieNigga.jsx';

import "./App.css";
import Layout from './Layout';
import Portfolio from './Potfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><HomieNigga /></Layout>
    },
    {
        path: "portfolio",
        element: <Layout><Portfolio></Portfolio></Layout>
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

