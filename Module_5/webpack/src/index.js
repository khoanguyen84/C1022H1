import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './index.css';

// để tạo component, có 2 cách
// cách 1: Class Component
// cách 2: function Component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
// root.render(<App></App>)