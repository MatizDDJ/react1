import React, { useState } from 'react';
import './components.css';

function Form() {

  const [datos, setDatos] = useState({
    nombre: '',
    cedula: '',
    numero: '',
    email: ''
  });
  

  const [usuarios, setUsuarios] = useState([]);


  const actualizarDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };


  const guardarUsuario = (e) => {
    e.preventDefault();
    

    if (!datos.nombre || !datos.cedula || !datos.numero || !datos.email) {
      alert('Por favor llena todos los campos');
      return;
    }


    setUsuarios([...usuarios, datos]);
    setDatos({
      nombre: '',
      cedula: '',
      numero: '',
      email: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuarios</h2>
      
      <form onSubmit={guardarUsuario}>
        <div className="form-group">
          <label>Nombre y Apellido:</label>
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={actualizarDatos}
            placeholder="ej: Juan Pérez"
          />
        </div>

        <div className="form-group">
          <label>Número de Cédula:</label>
          <input
            type="text"
            name="cedula"
            value={datos.cedula}
            onChange={actualizarDatos}
            placeholder="ej: 12345678"
          />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="numero"
            value={datos.numero}
            onChange={actualizarDatos}
            placeholder="ej: 0912345678"
          />
        </div>

        <div className="form-group">
          <label>Correo:</label>
          <input
            type="email"
            name="email"
            value={datos.email}
            onChange={actualizarDatos}
            placeholder="ej: juan@gmail.com"
          />
        </div>

        <button type="submit">
           Guardar Usuario
        </button>
      </form>

      {usuarios.length > 0 && (
        <div className="tabla-usuarios">
          <h3> Usuarios Registrados ({usuarios.length})</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cédula</th>
                <th>Teléfono</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, i) => (
                <tr key={i}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.cedula}</td>
                  <td>{usuario.numero}</td>
                  <td>{usuario.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Form;