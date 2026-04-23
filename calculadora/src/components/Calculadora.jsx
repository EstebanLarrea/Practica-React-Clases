import { useState } from "react";

function Calculadora({ volverAtras }) {
  const [valor, setValor] = useState("");

  const agragarValores = (valor2) => {
    setValor(valor2 + valor);
  };

  const validacion = () => {
    setValor(eval(valor));
  };

  const limpiarTodo = () => {
    setValor("");
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="text" value={valor} readOnly></input>
      <div>
        <button onClick={() => agragarValores("1")}>1</button>
        <button onClick={() => agragarValores("2")}>2</button>
        <button onClick={() => agragarValores("3")}>3</button>
        <button onClick={() => agragarValores("4")}>4</button>
        <button onClick={() => agragarValores("5")}>5</button>
        <button onClick={() => agragarValores("6")}>6</button>
        <button onClick={() => agragarValores("7")}>7</button>
        <button onClick={() => agragarValores("8")}>8</button>
        <button onClick={() => agragarValores("9")}>9</button>
        <button onClick={() => agragarValores("0")}>0</button>
        <button onClick={() => agragarValores("+")}>+</button>
        <button onClick={() => agragarValores("-")}>-</button>
        <button onClick={() => agragarValores("*")}>*</button>
        <button onClick={() => agragarValores("/")}>/</button>
        <button onClick={validacion}>=</button>
        <button onClick={limpiarTodo}>C</button>
      </div>
      <button onClick={volverAtras}>Go back</button>
    </div>
  );
}

export default Calculadora;
