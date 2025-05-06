
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Branding */}
        <h1 className="text-2xl font-bold text-teal-400">My Portfolio</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-200 font-medium">
            <li>
              <a href="#about" className="hover:text-teal-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-teal-400 transition">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-teal-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
