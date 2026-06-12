import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bishtsuraj751@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio message from ${form.name}`,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Send failed");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setError(
        "Unable to send message. Please try again later or email me directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="page contact-page">
      <h2 className="page-title">Get In Touch</h2>
      <p className="page-subtitle">Have a project in mind? Let's talk!</p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <p className="contact-label">Email</p>
              <a href="mailto:bishtsuraj751@gmail.com">bishtsuraj751@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <div>
              <p className="contact-label">GitHub</p>
              <a href="https://github.com/Suraj001" target="_blank" rel="noreferrer">
                https://github.com/SurajBisht001
              </a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">ℹ️</span>
            <div>
              <p className="contact-label">LinkedIn</p>
              <a href="https://in.linkedin.com/in/suraj-bisht-139038413" target="_blank" rel="noreferrer">
                https://in.linkedin.com/in/Suraj-Bisht
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {sent ? (
            <div className="success-msg">
              <p>✅ Message sent! I'll get back to you soon.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn-primary full-width" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}