
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contactSvg from "./contact-us.svg";
import Particle from "../Particle";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! I will contact you soon.`);
  };

  return (
    <section>
      
      <Container fluid className="contact-section">
        <Container className="contact-container">
          <Row className="align-items-center">
            <Col md={6} className="form-section">
              <h2 className="contact-heading">Get in Touch</h2>
              <p className="contact-subtext">We'd love to hear from you!</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className="contact-label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label className="contact-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label className="contact-label">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="contact-button">
                  Submit
                </Button>
              </Form>
            </Col>

            <Col md={6} className="image-section">
              <img src={contactSvg} alt="Contact Us" className="img-fluid" style={{ pointerEvents: "none" }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Particle />
    </section>
  );
}

export default ContactUs;
