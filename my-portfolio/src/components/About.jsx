import React from "react";

function About() {
  return (
    <section id="about" className="text-center py-8">
  <h2 className="text-3xl font-bold text-pastelBlue mb-4">About Me</h2>
  <img
    src="/assets/avatar.jpg"
    alt="Omario"
    className="mx-auto rounded-full w-40 h-40 border-4 border-pastelPink shadow-soft"
  />
  <p className="text-lg mt-4 text-gray-700">
    Hi! I’m Omario, a passionate web developer with a love for creating beautiful, functional websites. Let’s build something amazing together!
  </p>
</section>

  );
}

export default About;
