import React, { useState } from "react";
import Button from "./Button";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please write your message.";
  return errors;
}

function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    // Mock submission — replace with a real API call once a backend is connected.
    setTimeout(() => {
      setStatus("success");
      setValues(initialState);
    }, 900);
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border px-4 py-3 font-[Inter] text-sm text-[#22262B] outline-none transition-colors focus:border-[#4FA8DA] ${
      errors[name] ? "border-red-400" : "border-[#152A54]/15"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1 block font-[Inter] text-sm font-medium text-[#152A54]">
            Full Name
          </label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className={fieldClass("name")}
            placeholder="e.g. Chinwe Okafor"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block font-[Inter] text-sm font-medium text-[#152A54]">
            Email
          </label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            className={fieldClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1 block font-[Inter] text-sm font-medium text-[#152A54]">
            Phone Number
          </label>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className={fieldClass("phone")}
            placeholder="+234 XXX XXX XXXX"
          />
        </div>

        <div>
          <label className="mb-1 block font-[Inter] text-sm font-medium text-[#152A54]">
            Subject
          </label>
          <input
            name="subject"
            value={values.subject}
            onChange={handleChange}
            className={fieldClass("subject")}
            placeholder="What is this about?"
          />
          {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1 block font-[Inter] text-sm font-medium text-[#152A54]">
          Message
        </label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className={fieldClass("message")}
          placeholder="Tell us how we can help..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" onClick={handleSubmit} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="rounded-xl bg-green-50 px-4 py-3 font-[Inter] text-sm text-green-700">
          Thank you — your message has been sent. We'll get back to you shortly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
