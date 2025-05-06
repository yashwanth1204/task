import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Socials</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:sbankuru@aum.edu"
              className="text-teal-400 hover:underline"
            >
              sbankuru@aum.edu
            </a>
          </p>
          <p>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/sai-santosh-bankuru-9713a9169/"
              className="text-teal-400 hover:underline"
            >
              https://www.linkedin.com/in/sai-santosh-bankuru-9713a9169/
            </a>
          </p>
          <p>
            <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/yourusername"
              className="text-teal-400 hover:underline"
            >
              https://github.com/santosh843
            </a>
          </p>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sai Santosh Bankuru. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
