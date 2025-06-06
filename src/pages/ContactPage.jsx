import { useState } from 'react';
import Layout from '../components/Layout';
import {
  ContactWrapper,
  Title,
  Form,
  Input,
  Textarea,
  Button,
  ErrorMessage,
  SuccessMessage,
} from '../components/styles/ContactPage.styles';

/**
 * ContactPage component renders a contact form with validation.
 * On successful submit, it clears inputs and shows a thank‐you message.
 *
 * @returns {JSX.Element} The contact form layout with validation messages.
 */
function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /**
   * Updates `formData` state when an input changes.
   *
   * @param {React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>} e
   *   – The input event containing `name` and `value`.
   */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted) {
      setSubmitted(false);
    }
  }

  /**
   * Validates the contact form. Ensures fullName, subject, and body
   * have at least 3 characters, and `email` matches a simple regex.
   *
   * @returns {{ [field: string]: string }} An object mapping each invalid field to its error message.
   */
  function validateForm() {
    const newErrors = {};
    if (formData.fullName.length < 3)
      newErrors.fullName = 'Full name must be at least 3 characters.';
    if (formData.subject.length < 3)
      newErrors.subject = 'Subject must be at least 3 characters.';
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email must be valid.';
    if (formData.body.length < 3)
      newErrors.body = 'Body must be at least 3 characters.';
    return newErrors;
  }

  /**
   * Handles form submission. Prevents default, validates data, shows errors
   * if any. On successful validation, logs to console, clears the form, and shows success message.
   *
   * @param {React.FormEvent<HTMLFormElement>} e – The form submission event.
   */
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log(formData);

      setFormData({
        fullName: '',
        subject: '',
        email: '',
        body: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <Layout>
      <ContactWrapper>
        <Title>Contact Us</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}

          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

          <Textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Message"
          />
          {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}

          <Button type="submit">Submit</Button>
        </Form>

        {submitted && (
          <SuccessMessage>
            Message sent. Thank you for contacting us!
          </SuccessMessage>
        )}
      </ContactWrapper>
    </Layout>
  );
}

export default ContactPage;
