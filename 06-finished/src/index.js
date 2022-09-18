import React from "react"; // Technically we don't need this import but this is how it was done in the past.
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
