import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React !!!!!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// react before v18 import only from react-dom instead react-dom/client
// React.render(<App />)
