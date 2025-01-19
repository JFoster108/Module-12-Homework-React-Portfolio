import React from "react";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import About from "/src/components/About.jsx";
import Portfolio from "/src/components/Portfolio.jsx";
import Contact from "/src/components/Contact.jsx";
import Resume from "/src/components/Resume.jsx";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
