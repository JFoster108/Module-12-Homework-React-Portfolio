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
    Hey there! My name is Justice Foster. I was dual enrolled while I was in highschool at Burke Middle College, and was able to obtain my Associates in Arts degree through Western Piedmont Community College alongside my Highschool Diploma.
    I'm currently enrolled in a web development bootcamp sponsered by UNC Chapel Hill in hopes of it segwaying into a career in the Videogame industry.
    I am a gamer, an artist, and a social advocate. Let's create beautiful things together!
  </p>
</section>

  );
}

export default About;
