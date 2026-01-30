import React from "react";
import placeholder from "../assets/project-placeholder.svg";

const ProjectsBento = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="mb-16 text-center">
          <p className="text-white/60 mb-2"> My Work</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Selected Projects
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">

          {/* BIG FEATURED */}
          <div className="bento-card bento-big group">
            <img src={placeholder} alt="AI Portfolio" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="bento-content relative z-10">
              <h3>AI Portfolio Platform</h3>
              <p>3D interactive portfolio with AI + Three.js</p>
              <button>View Project</button>
            </div>
          </div>

          {/* SMALL RIGHT */}
          <div className="bento-card bento-small group">
            <img src={placeholder} alt="FinTech" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="bento-content relative z-10 p-4">
              <h3>FinTech App</h3>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="bento-card bento-wide group">
            <img src={placeholder} alt="E-commerce" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="bento-content relative z-10 p-4">
              <h3>E-commerce AI Recommender</h3>
            </div>
          </div>

          {/* BOTTOM MIDDLE */}
          <div className="bento-card bento-wide group">
            <img src={placeholder} alt="Chatbot" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="bento-content relative z-10 p-4">
              <h3>Chatbot Platform</h3>
            </div>
          </div>

          {/* RIGHT TALL */}
          <div className="bento-card bento-tall group">
            <img src={placeholder} alt="Analytics" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="bento-content relative z-10 p-4">
              <h3>Data Analytics Dashboard</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsBento;
