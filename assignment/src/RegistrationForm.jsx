import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const RegisterForm = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Form Submitted:", response.data);
      setMessage("Registration successful!");
      setFormData({ name: "", email: "", phone: "" });
      onRegisterSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form. Try again.");
    }
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RegisterForm;
