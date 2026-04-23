import { useState } from "react";
import "./App.css";
import Suma from "./components/Suma";
import Calculadora from "./components/Calculadora";

function App() {
  const [pantalla, setPantalla] = useState("inicio");

  const goBack = () => {
    setPantalla("inicio");
  };

  if (pantalla === "suma") {
    return <Suma volverAtras={goBack} />;
  }

  if (pantalla === "calculadora") {
    return <Calculadora volverAtras={goBack} />;
  }

  return (
    <div className="menu-principal">
      <h1>Menú Principal</h1>
      <button onClick={() => setPantalla("suma")}>Ir a la Suma</button>
      <button onClick={() => setPantalla("calculadora")}>
        Ir a la Calculadora
      </button>
    </div>
  );
}

export default App;
