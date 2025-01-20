import React from "react";

function Resume() {
  return (
    <section id="resume" className="text-center py-8">
  <h2 className="text-3xl font-bold text-pastelBlue mb-4">Resume</h2>
  <a
    href="./assets/resume.pdf"
    download
    className="bg-pastelPurple text-white py-2 px-4 rounded-xl hover:bg-pastelPink shadow-soft"
  >
    Download Resume
  </a>
</section>
  );
}

export default Resume;
