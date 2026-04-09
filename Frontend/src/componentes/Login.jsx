import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">MovieApp</h1>
        <p className="subtitle">Bienvenido, inicia sesión</p>

        <div className="input-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder="Ingresa tu usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
}