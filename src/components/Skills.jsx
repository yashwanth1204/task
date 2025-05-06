import React from "react";

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML",
    "MYSQL",
    "Tailwind CSS",
    "Java",
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <span className="text-gray-200 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
