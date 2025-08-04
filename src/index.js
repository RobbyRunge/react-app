// Importiere React, um JSX verwenden zu können
import React from "react";

// Importiere die neue ReactDOM-API aus "react-dom/client"
import ReactDOM from "react-dom/client";

// Erstelle ein einfaches JSX-Element, das eine Überschrift darstellt
const element = <h1>Hello World</h1>;

// Initialisiere das Root-Element und rendere das JSX-Element in das DOM
ReactDOM.createRoot(document.getElementById('root')).render(element);