"use client"; // Add this line for client-side components in Next.js 13 and above.
import { Nunito } from "next/font/google";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex my-5 items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="mx-10">
          <h1 className="text-3xl">GuitarBook</h1>
        </a>
      </div>
      <div className="flex flex-1 items-center ml-10">
        <SearchBar />
        <ul className="flex ml-10">
          <li className="mr-5">
            <a href="">Tuner</a>
          </li>
          <li>
            <a href="">Chords</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
