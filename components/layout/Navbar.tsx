"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "about",
    "skills",
    "experience",
    "projects",
    "certifications",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center h-16">

          <a
            href="#"
            className="font-bold text-xl"
          >
            Ezhilan
          </a>

          <ul className="hidden md:flex gap-8">

            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>
                  {link.charAt(0).toUpperCase() +
                    link.slice(1)}
                </a>
              </li>
            ))}

          </ul>
<div className="flex items-center gap-4">

  <ThemeToggle />

  <button
    onClick={() =>
      setIsOpen(!isOpen)
    }
    className="md:hidden"
  >
    ☰
  </button>

</div>

        </div>

        {isOpen && (

          <div className="md:hidden pb-4">

            <ul className="flex flex-col gap-4">

              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={() =>
                      setIsOpen(false)
                    }
                  >
                    {link.charAt(0).toUpperCase() +
                      link.slice(1)}
                  </a>
                </li>
              ))}

            </ul>

          </div>

        )}

      </div>

    </nav>
  );
}