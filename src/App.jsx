import './App.css'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">CarePlus Clinic</div>
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#appointment" className="button button-secondary">
          Appointment
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Trusted Healthcare Center</p>
            <h1>Your Health, Our Priority</h1>
            <p className="hero-text">
              Personalized care with experienced doctors, modern facilities, and a warm
              patient-first approach.
            </p>
            <a href="#appointment" className="button button-primary">
              Book Appointment
            </a>
          </div>
          <div className="hero-image">
           <img
  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&auto=format&fit=crop&q=80"
  alt="Doctor with patient"
/>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-intro">
            <p className="eyebrow">About CarePlus</p>
            <h2>Compassionate care for every family</h2>
            <p>
              CarePlus Clinic delivers trusted medical services in a welcoming,
              modern setting. We help you feel confident, healthy, and supported.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>10+ Years Experience</h3>
              <p>Healthcare expertise delivered with care and trust.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Always available for urgent questions and advice.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Doctors</h3>
              <p>Certified specialists for every stage of care.</p>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-header">
            <p className="eyebrow">Our Services</p>
            <h2>Comprehensive healthcare solutions</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">General Checkup</div>
            <div className="service-card">Dental Care</div>
            <div className="service-card">Child Care</div>
            <div className="service-card">Emergency Care</div>
            <div className="service-card">Lab Test</div>
            <div className="service-card">Pharmacy</div>
          </div>
        </section>

        <section className="doctors-section" id="doctors">
          <div className="section-header">
            <p className="eyebrow">Meet the Team</p>
            <h2>Trusted doctors you can rely on</h2>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-avatar">AK</div>
              <h3>Dr. Arun Kumar</h3>
              <p>General Physician</p>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar">PS</div>
              <h3>Dr. Priya Sharma</h3>
              <p>Dentist</p>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar">MR</div>
              <h3>Dr. Meena Raj</h3>
              <p>Pediatrician</p>
            </div>
          </div>
        </section>

        <section className="appointment-section" id="appointment">
          <div className="section-header">
            <p className="eyebrow">Book a Visit</p>
            <h2>Schedule your appointment today</h2>
          </div>
          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Patient Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Phone number" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Select Doctor
                <select name="doctor" required>
                  <option value="">Choose doctor</option>
                  <option value="arun-kumar">Dr. Arun Kumar</option>
                  <option value="priya-sharma">Dr. Priya Sharma</option>
                  <option value="meena-raj">Dr. Meena Raj</option>
                </select>
              </label>
              <label>
                Select Date
                <input type="date" name="date" required />
              </label>
            </div>
            <label className="full-width">
              Message
              <textarea name="message" rows="4" placeholder="Tell us more" />
            </label>
            <button type="submit" className="button button-primary">
              Submit Request
            </button>
          </form>
        </section>

        <section className="testimonials-section" id="testimonials">
          <div className="section-header">
            <p className="eyebrow">Patient Stories</p>
            <h2>What our patients say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "The staff was warm and professional. My appointment felt easy and
                reassuring from the moment I arrived."
              </p>
              <span>— Riya</span>
            </div>
            <div className="testimonial-card">
              <p>
                "CarePlus helped our family with fast, compassionate treatment and clear
                guidance every step of the way."
              </p>
              <span>— Anil</span>
            </div>
            <div className="testimonial-card">
              <p>
                "Exceptional care for my child. The pediatrician was gentle, patient,
                and very knowledgeable."
              </p>
              <span>— Sneha</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-header">
            <p className="eyebrow">Get in Touch</p>
            <h2>Contact information</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Address</h3>
              <p>123 Health Street, Wellness City</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <p>hello@careplusclinic.com</p>
            </div>
            <div className="contact-card">
              <h3>Opening Hours</h3>
              <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        © 2026 CarePlus Clinic. All rights reserved.
      </footer>
    </div>
  )
}

export default App
