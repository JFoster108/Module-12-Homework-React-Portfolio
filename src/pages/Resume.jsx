import React from "react";

function Resume() {
  return (
    <section id="resume" className="text-center py-8">
  <h2 className="text-3xl font-bold text-pastelBlue mb-4">Resume</h2>
  <a
    href="/public/resume.pdf"
    download
    className="bg-pastelPurple text-white py-2 px-4 rounded-xl hover:bg-pastelPink shadow-soft"
  >
    Download Resume
    </a>
      <div className="mt-6 text-left max-w-4xl mx-auto bg-pastelPink bg-opacity-10 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-pastelPurple mb-2">
          Overview of My Experience
        </h3>
        <p className="text-gray-700 leading-relaxed">
          As a passionate web developer, I have gained hands-on experience in creating dynamic, responsive, and user-friendly applications. My expertise includes:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Proficient in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for building the foundation of web interfaces.
          </li>
          <li>
            Skilled in modern frameworks like <strong>React.js</strong> to develop efficient single-page applications (SPAs).
          </li>
          <li>
            Experienced with CSS libraries such as <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong> for designing visually appealing UIs.
          </li>
          <li>
            Familiarity with back-end technologies, including <strong>Node.js</strong>, <strong>Express</strong>, and relational databases like <strong>PostgreSQL</strong>.
          </li>
          <li>
            Adept at integrating RESTful APIs and ensuring seamless communication between the front-end and back-end systems.
          </li>
          <li>
            Strong understanding of version control using <strong>Git</strong> and collaboration on platforms like <strong>GitHub</strong>.
          </li>
          <li>
            Committed to writing clean, maintainable code and following best practices for accessibility and performance optimization.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          My dedication to continuous learning and problem-solving drives my ability to adapt to new technologies and deliver high-quality web solutions.
        </p>
      </div>
    </section>
  );
}

export default Resume;
