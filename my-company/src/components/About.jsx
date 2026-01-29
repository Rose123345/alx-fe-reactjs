function About() {
  return (
    <div style={{
      padding: '60px 40px',
      backgroundColor: '#ecf0f1',
      minHeight: '70vh'
    }}>
      <h1 style={{
        fontSize: '42px',
        color: '#2c3e50',
        marginBottom: '30px'
      }}>About Us</h1>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p style={{
          fontSize: '18px',
          color: '#555',
          marginBottom: '20px',
          lineHeight: '1.8'
        }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
        <p style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.8'
        }}>With over 30 years of experience, we have built a reputation for excellence, innovation, and customer satisfaction. Our dedicated team is committed to helping businesses thrive in the digital age.</p>
      </div>
    </div>
  );
}

export default About;