// import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-100 text-gray-600 font-sans">
      <div className=" mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-around space-x-2">
              <img src={Logo} alt="" />
            </div>

            <p className="text-sm text-gray-500 text-justify leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center justify-around max-sm:px-10 space-x-4 text-center pt-2 text-sm font-medium text-gray-700">
              <a
                href="#github"
                className="hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="#twitter"
                className="hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="#linkedin"
                className="hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 p-3 flex flex-row items-center justify-between text-xs text-gray-400">
        <p className="">© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center space-x-4  sm:mt-0">
          <a href="#privacy" className="hover:text-gray-600 transition-colors">
            Privacy
          </a>
          <a href="#terms" className="hover:text-gray-600 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
