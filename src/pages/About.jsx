import React from "react";

function About() {
  return (
    <section id="about" className="text-center py-8">
  <h2 className="text-3xl font-bold text-pastelBlue mb-4">About Me</h2>
  <img
    src="./headshot.JPG"
    alt="Justice Foster"
    className="mx-auto rounded-full w-40 h-40 border-4 border-pastelPink shadow-soft object-cover"
  />
  <p className="text-lg mt-4 text-gray-700">
  Hi, I'm Justice Foster, a passionate full-stack developer with a creative spirit and a love for blending technology with artistry. I recently completed an intensive Full-Stack Web Development bootcamp through UNC Chapel Hill, where I developed strong proficiency in technologies such as JavaScript, TypeScript, React, Node.js, Express, GraphQL, MongoDB, and PostgreSQL.

Driven by curiosity and empathy, I approach projects with a focus on crafting thoughtful, user-centered designs and efficient, robust functionality. My diverse interests—from video game development and digital art to sociology and pop culture—enable me to create dynamic, engaging applications that resonate deeply with users.

I thrive in collaborative environments, continuously seeking opportunities to learn and grow my technical skills while contributing meaningfully to impactful projects.

When I'm not coding, you can find me diving deep into the worlds of video games, especially Nintendo, exploring visual storytelling through digital art, or advocating for inclusive and ethical practices within tech. I'm excited to bring my unique blend of creativity, technical skill, and social awareness to every project I undertake. Let's make beautiful things together!
  </p>
</section>

  );
}

export default About;
