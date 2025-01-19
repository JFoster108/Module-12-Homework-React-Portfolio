import React from "react";

function Contact() {
  return (
    <section id="contact" className="text-center py-8">
  <h2 className="text-3xl font-bold text-pastelBlue mb-4">Contact</h2>
  <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-soft">
    <input
      type="text"
      placeholder="Your Name"
      className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
    />
    <textarea
      placeholder="Your Message"
      rows="5"
      className="block w-full mb-4 p-2 border border-gray-300 rounded-xl"
    ></textarea>
    <button
      type="submit"
      className="bg-pastelPink text-white py-2 px-4 rounded-xl hover:bg-pastelTurquoise shadow-soft"
    >
      Send Message
    </button>
  </form>
</section>

  );
}

export default Contact;
