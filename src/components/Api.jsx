import { useState, useEffect } from "react";
import "../App.css";

function Api({ volverAtras }) {
  const [lista, setLista] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);

  const Datos = async () => {
    try {
      const rest = await fetch("https://rickandmortyapi.com/api/character");
      const datos = await rest.json();
      setLista(datos.results);
    } catch (error) {
      console.log("Error en el Api");
    }
  };

  useEffect(() => {
    Datos();
  }, []);

  const personajesFiltrados = lista.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div className="dashboard">
      <h1>Dashboard de Personajes</h1>

      <button className="btn-volver" onClick={volverAtras}>
        Go back
      </button>

      <br />

      <input
        type="text"
        className="buscador"
        placeholder="Escribe un nombre para buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="grid-personajes">
        {personajesFiltrados.map((p) => (
          // 1. Le quitamos el onClick a este div
          <div key={p.id} className="tarjeta">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.species}</p>

            {/* 2. Agregamos el botón con el onClick aquí */}
            <button
              className="btn-descripcion"
              onClick={() => setSeleccionado(p)}
            >
              Descripción
            </button>
          </div>
        ))}
      </div>

      {seleccionado && (
        <div className="modal-fondo" onClick={() => setSeleccionado(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn-cerrar"
              onClick={() => setSeleccionado(null)}
            >
              X
            </button>
            <img src={seleccionado.image} alt={seleccionado.name} />
            <h2>{seleccionado.name}</h2>
            <p>
              <strong>Estado:</strong> {seleccionado.status}
            </p>
            <p>
              <strong>Especie:</strong> {seleccionado.species}
            </p>
            <p>
              <strong>Género:</strong> {seleccionado.gender}
            </p>
            <p>
              <strong>Origen:</strong> {seleccionado.origin.name}
            </p>
            <p>
              <strong>Ubicación:</strong> {seleccionado.location.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Api;
