"use client"; // Add this line for client-side components in Next.js 13 and above.
import { Nunito } from "next/font/google";
import { useState } from "react";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className={`${nunito.className} font-bold text-xl`}>
              MMCHORDBOOK
            </a>
          </div>

          {/* Search Bar (hidden on mobile) */}
          <div className="hidden md:block  w-3/6 ">
            <input
              type="text"
              placeholder="Search Songs...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            />
          </div>

          {/* Navigation Links (hidden on mobile) */}
          <div className="hidden md:block flex flex-start">
            <div className="flex	 items-baseline space-x-4">
              <a
                href="/"
                className="text-black-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Tuner
              </a>
              <a
                href="/about"
                className="text-black-700 hover:bg-gray-200 hover:text-white-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chords
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-black-300 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tuners
            </a>
            <a
              href="/about"
              className="text-black-300 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Chords
            </a>
            {/* ...more links */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

// import styles from "./navbar.module.css";
// import SearchBar from "./SearchBar";
// import { useState } from "react";

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggle() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navbar_left}>
//         <h3>Guitar Book</h3>
//       </div>
//       <div className={styles.navbar_center}>
//         <SearchBar />
//       </div>
//       <div className={styles.navbar_right}>Chord</div>
//     </nav>
//   );
// }
