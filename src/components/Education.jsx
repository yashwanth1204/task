import React from "react";

function Education() {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science",
      school: "Malla reddy University",
      years: "2014 - 2018",
    },
    {
      degree: "M.Sc. in Computer Science",
      school: "Auburn University at Montgomery",
      years: "2024 - 2026",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-800 text-white px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-teal-400"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-300">
              {edu.school} · {edu.years}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
