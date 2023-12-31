import React from "react";
import ReactDOM from "react-dom/client";


const heading1= React.createElement("h1", {className:"title"}, "Hello!");
const heading2= React.createElement("h1", {className:"title"}, "World!");

const component= React.createElement("div", {id:"component"}, [heading1, heading2])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(component)