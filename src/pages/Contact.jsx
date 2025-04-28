import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      setSubmissionResult("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("FAILED...", error);
      setSubmissionResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="text-center py-8">
      <h2 className="text-3xl font-bold text-pastelBlue mb-4">Contact</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-soft" onSubmit={handleSubmit}>
        {submissionResult === "success" && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {submissionResult === "error" && (
          <p className="text-red-500">Oops, something went wrong. Please try again later.</p>
        )}
        <input
          type="text"
          id="name"         // Added id
          name="name"       // Added name
          placeholder="Your Name"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"        // Added id
          name="email"      // Added name
          placeholder="Your Email"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          id="subject"      // Added id
          name="subject"    // Added name
          placeholder="Subject"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          type="text"
          id="message"      // Added id
          name="message"    // Added name
          placeholder="Your Message"
          rows="5"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-pastelPink text-white py-2 px-4 rounded-xl hover:bg-pastelTurquoise shadow-soft"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;