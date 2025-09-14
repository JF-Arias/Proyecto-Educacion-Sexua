import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    api.get("/ruta-de-prueba") // Reemplaza con una ruta real de tu backend
      .then(res => setMensaje(res.data.mensaje))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Conexión Backend-Frontend</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
