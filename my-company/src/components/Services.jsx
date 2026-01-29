function Services() {
  const services = [
    {
      name: 'Technology Consulting',
      description: 'Expert guidance on digital transformation and technology strategy'
    },
    {
      name: 'Market Analysis',
      description: 'In-depth market research and competitive analysis'
    },
    {
      name: 'Product Development',
      description: 'End-to-end product development and innovation services'
    },
    {
      name: 'Business Strategy',
      description: 'Strategic planning and business growth consulting'
    }
  ];

  return (
    <div style={{
      padding: '60px 40px',
      backgroundColor: '#ecf0f1',
      minHeight: '70vh'
    }}>
      <h1 style={{
        fontSize: '42px',
        color: '#2c3e50',
        marginBottom: '40px',
        textAlign: 'center'
      }}>Our Services</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}><br />            <h3 style={{
            color: '#2c3e50',
            marginBottom: '10px'
          }}>{service.name}</h3>
            <p style={{
              color: '#7f8c8d',
              lineHeight: '1.6'
            }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
