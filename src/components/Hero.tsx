import type React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <p className="text-5xl sm:text-6xl lg:text-7xl mb-6">⚡️</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Drain-Solutions and Plumbing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We provide top-notch plumbing services for residential and
              commercial properties.
            </p>
            <a
              href="#contact-us"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              alt="Plumbing Service"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
