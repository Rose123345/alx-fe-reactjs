import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

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
      }}>Contact Us</h1>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
      }}>
        {submitted && (
          <div style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '15px',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>Form submitted successfully!</div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500'
            }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500'
            }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500'
            }}>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
                fontFamily: 'Arial, sans-serif'
              }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }} onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;