import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
import Content from './components/Content';
import './components/components.css';

function App() {
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (formData) => {
    setRegistros([...registros, formData]);
  };

  return (
    <div>
      <Navbar />
      <Content />
        <Form onSubmit={handleSubmit} />
        <Table data={registros} />
      </div>

  );
}

export default App;