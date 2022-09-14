import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
const { default: axios } = require("axios");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

