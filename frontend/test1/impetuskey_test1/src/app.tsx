//Imports
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";

//Components
import StyledButton from "./components/StyledButton";

function App() {
  //States
  const [count, setCount] = useState(0);
  return (
    <StyledButton
      content={"Contador está em " + count}
      variant="contained"
      color="secondary"
      onClick={() => setCount((count) => count + 1)}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
