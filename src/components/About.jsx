import React from "react";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-900 text-white px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
          Computer Analyst with 3 and half years of experience in data
          processing, management, and development of new business opportunities.
          I’m skilled at establishing controls and managing daily data jobs.
          Hardworking professional adept at correcting routine problems and
          escalating major concerns.
        </p>
      </div>
    </motion.section>
  );
}

export default About;

<p>
  
</p>