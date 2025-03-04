// pages/ContactPage.jsx
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm() {
    const newErrors = {};
    if (formData.fullName.length < 3) newErrors.fullName = "Full name must be at least 3 characters.";
    if (formData.subject.length < 3) newErrors.subject = "Subject must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email must be valid.";
    if (formData.body.length < 3) newErrors.body = "Body must be at least 3 characters.";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log(formData); // You can replace this with actual form submission logic
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.fullName && <p>{errors.fullName}</p>}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
        {errors.subject && <p>{errors.subject}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Message"
        />
        {errors.body && <p>{errors.body}</p>}
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for contacting us!</p>}
    </div>
  );
}

export default ContactPage;
