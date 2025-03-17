"use client";

import { Logo } from "@/design-system/logo/logo";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détection du scroll pour ajouter le flou
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/50 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-6 md:px-16">
        {/* Logo à gauche */}
        <Link href={"/"} className="text-foreground">
          <Logo size="small" />
        </Link>

        {/* Menu Desktop + Bouton à droite */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Liens */}
          <ul className="flex space-x-8 text-lg">
            {[
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projets" },
              { href: "/about", label: "À propos" },
            ].map((menuItem) => (
              <li key={menuItem.href}>
                <Link
                  href={menuItem.href}
                  className="hover:text-primary-600 transition-colors duration-300"
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bouton "Réserver un appel" */}
          <Link href="/contact">
            <button className="bg-primary hover:bg-primary-600 px-6 py-2 rounded-lg text-white font-medium transition-all">
              Réserver un appel →
            </button>
          </Link>
        </div>

        {/* Burger Icon Mobile */}
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={handleNav}
        >
          {menuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-screen bg-gray-900/90 backdrop-blur-md p-8 flex flex-col items-center justify-center transition-transform duration-500 md:hidden`}
      >
        <ul className="space-y-6 text-2xl">
          {[
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "À propos" },
            { href: "/contact", label: "Réserver un appel" },
          ].map((menuItem) => (
            <li key={menuItem.href}>
              <Link href={menuItem.href} onClick={() => setMenuOpen(false)}>
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
