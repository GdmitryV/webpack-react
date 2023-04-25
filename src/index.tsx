import React from 'react';
import {createRoot} from "react-dom/client";
import {App} from './App';

const domNone = document.getElementById('root');
if (!domNone) throw new Error('Root element not found!');
const root = createRoot(domNone);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);