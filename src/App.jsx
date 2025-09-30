import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Form />
    </div>
  );
}

export default App;