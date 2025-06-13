const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 10 L90 80 L10 80 Z" fill="#FFD700" opacity={0.9} />
                <path d="M50 10 L90 80 L50 80 Z" fill="#FFA500" opacity={0.7} />
                <path d="M50 10 L50 80 L10 80 Z" fill="#DAA520" opacity={0.8} />
              </svg>
            </div>
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Logo
            </span>
          </div>

          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("aboutUs")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                  href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
