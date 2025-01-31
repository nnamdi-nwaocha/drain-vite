import type React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ReviewSection from "./components/ReviewSection";
import { Features } from "./components/Services";
import ContactUs from "./components/ContactUs";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <ReviewSection />
        <Features />
        <ContactUs />
      </main>
    </div>
  );
};

export default App;
