import type React from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 py-4 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a
              href="#contact-us"
              className="inline-block px-4 py-1 text-md font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <NavLink href="#reviews" text="Reviews" />
            <NavLink href="#services" text="Services" />
            <NavLink href="#contact-us" text="Contact Us" />
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {!isMenuOpen ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="px-1 pt-8 pb-4 md:hidden">
            <div className="grid gap-y-6">
              <NavLink href="#reviews" text="Reviews" />
              <NavLink href="#services" text="Services" />
              <NavLink href="#contact-us" text="Contact Us" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a
    href={href}
    className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
  >
    {text}
  </a>
);

const MenuIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Header;
