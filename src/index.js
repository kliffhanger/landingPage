import React from "react";
import {createRoot} from 'react-dom/client'
import App from "./App";
import Header from "./components/Header/Header";
import './styles.min.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <Header/>
        <App/>
    </>
);