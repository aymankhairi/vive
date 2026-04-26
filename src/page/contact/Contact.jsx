import React, { useState } from "react";
import "../../css/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact_page">
      <div className="contact_container">
        {/* LEFT */}
        <div className="contact_info animate_left">
          <h2>Let’s Talk</h2>
          <p>Got a question, idea, or collaboration? We’re here to help you.</p>

          <div className="contact_details">
            <div>📧 support@example.com</div>
            <div>📞 +31 123 456 789</div>
            <div>📍 Rotterdam, Netherlands</div>
          </div>

          <div className="contact_glow"></div>
        </div>

        {/* RIGHT */}
        <div className="contact_form animate_right">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>

            <div className="form_group">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

            <div className="form_group">
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </div>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
