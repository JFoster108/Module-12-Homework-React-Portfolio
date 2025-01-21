import React from "react";

const projects = [
  {
    title: "Prework Study Guide",
    description: "A study guide to help you start your coding journey",
    image: "./prework-study-guide.png", // Replace with your image path
    liveLink: "https://jfoster108.github.io/prework-study-guide/",
    repoLink: "https://github.com/JFoster108/prework-study-guide",
  },
  {
    title: "Kadence: A square breathing application",
    description: "An application for those with weary souls.",
    image: "./kadence.png", // Replace with your image path
    liveLink: "https://thomas-b01.github.io/Project-1-repo/",
    repoLink: "https://github.com/Thomas-B01/Project-1-repo",
  },
  {
    title: "Professional README Generator",
    description: "A command line application that allows you to create a README.md file",
    image: "./readme-generator.png", // Replace with your image path
    liveLink: null, // No deployment link
    repoLink: "https://github.com/JFoster108/Module7Homework",
  },
  {
    title: "Vehicle Builder",
    description: "A command line application that lets you build vehicles, and more",
    image: "./vehicle-cli.png", // Replace with your image path
    liveLink: null, // No deployment link
    repoLink: "https://github.com/JFoster108/Module-8-Homework",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that uses the OpenWeather API.",
    image: "./api-weather.png", // Replace with your image path
    liveLink: "https://justicefoster-apiweatherservice-hw9.onrender.com/",
    repoLink: "https://github.com/JFoster108/Module-9-Homework?tab=readme-ov-file",
  },
  {
    title: "PostgreSQL Employee Tracker",
    description: "A CLI application to manage company employee data.",
    image: "./employee-tracker.png", // Replace with your image path
    liveLink: null, // No deployment link
    repoLink: "https://github.com/JFoster108/Module-10-Homework",
  },
  {
    title: "My Portfolio Website",
    description: "A place to learn more about me, marvel at my work, and contact me",
    image: "./portfolio-site.png", // Replace with your image path
    liveLink: null, // No deployment link
    repoLink: "https://github.com/JFoster108/Module-12-Homework-React-Portfolio",
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-8 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-pastelBlue mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-pastelBlue rounded-lg shadow-md overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover group-hover:opacity-70 transition-opacity duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-pastelPurple bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {/* Conditionally Render "Live" Button */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pastelTurquoise hover:bg-pastelPink text-white py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Live
                  </a>
                )}

                {/* "Code" Button: Visible Only on Hover */}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pastelPink group-hover:opacity-100 opacity-0 hover:bg-pastelTurquoise text-white py-2 px-4 rounded-md transition-all duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;