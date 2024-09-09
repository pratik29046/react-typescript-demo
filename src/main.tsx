// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
