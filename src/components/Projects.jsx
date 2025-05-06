import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Dynamic Project Gallery",
    description:
      "Using JSON array of objects, I've created gallery to display all the class works on a navbar.",
    tech: "HTML, CSS, GITHUB",
    link: "https://github.com/santosh843/assignments",
  },
  {
    title: "Portfolio Project",
    description:
      "Created my portfolio using REACT and tailwindcss and created a GITHUB page for access.",
    tech: "REACT, TAILWIND",
    link: "https://github.com/santosh843/react_project",
  },
  {
    title: "Hangman game in Python",
    description:
      "Featuring randomly selected fruit names. Each correct guess reveals the letters position, while each miss brings you closer to end.",
    tech: "PYTHON",
    link: "https://github.com/santosh843/react_project",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto w-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          centeredSlides={true}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="!w-auto flex justify-center">
              <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl w-80">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 italic">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-teal-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
