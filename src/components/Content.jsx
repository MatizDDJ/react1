import React from 'react';
import './components.css';

const Content = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías como React, Angular y Vue.js. Nuestras soluciones son escalables y optimizadas para SEO.",
      icon: "💻"
    },
    {
      id: 2,
      title: "Desarrollo Móvil",
      description: "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android utilizando React Native y Flutter. Experiencia de usuario excepcional garantizada.",
      icon: "📱"
    },
    {
      id: 3,
      title: "Consultoría IT",
      description: "Ofrecemos asesoramiento experto en transformación digital, arquitectura de software y mejores prácticas de desarrollo. Optimizamos sus procesos tecnológicos.",
      icon: "🔍"
    }
  ];

  const clientLogos = [
    "Microsoft", "Google", "Amazon", "Meta", "Apple", "IBM"
  ];

  return (
    <div className="content">
      <section className="hero-section">
        <h1>Soluciones Tecnológicas para el Futuro</h1>
        <p>Transformando ideas en soluciones digitales innovadoras desde 2010</p>
      </section>

      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="cards">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Proyectos Completados</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Expertos en Tecnología</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Clientes Satisfechos</p>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <h2>Confían en Nosotros</h2>
        <div className="client-logos">
          {clientLogos.map((client, index) => (
            <div key={index} className="client-logo">
              {client}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;