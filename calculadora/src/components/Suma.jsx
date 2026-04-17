import { use, useState } from "react";

function Suma() {
  const [num, setNum] = useState("");
  const [num2, setNum2] = useState("");

  const Eventos = (e) => {
    e.preventDefault();
  };

  let resultado = parseInt(num) + parseInt(num2);

  return (
    <div>
      <h1>SUMA DE DOS DIGITOS</h1>
      <input
        type="text"
        value={num}
        placeholder="Introduzca un numero"
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        value={num2}
        placeholder="Introduzca un numero"
        onChange={(e) => setNum2(e.target.value)}
      ></input>
      <br></br>
      <button
        style={{
          border: "none",
          padding: "5px 20px",
        }}
        onClick={() => alert("El resultado es: " + resultado)}
      >
        Sumar
      </button>
    </div>
  );
}

export default Suma;
