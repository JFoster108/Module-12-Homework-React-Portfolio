import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="text-center py-8">
    <h2 className="text-3xl font-bold text-pastelBlue mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Add your projects */}
            <div className="bg-white p-4 rounded-xl shadow-soft">
            <h3 className="text-lg font-bold mb-2 text-pastelPurple">Project 1</h3>
            <p className="text-gray-600">Description of the project...</p>
            <a href="#" className="text-pastelBlue hover:underline mt-2 block">
                View Project
            </a>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;
