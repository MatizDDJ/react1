import React from 'react';
import './components.css';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No hay datos para mostrar</p>;
  }

  return (
    <div className="data-display">
      <h3>Registros</h3>
      <div className="table-container">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <span>
                <strong>Nombre:</strong>
                {item.nombre}
              </span>
              <span>
                <strong>Email:</strong>
                {item.email}
              </span>
              <span>
                <strong>Teléfono:</strong>
                {item.telefono}
              </span>
              <span>
                <strong>Mensaje:</strong>
                {item.mensaje}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Table;