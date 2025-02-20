import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Logo } from "@/design-system/logo/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Colonne 1 : Logo et description */}
          <div className="w-full lg:w-1/3 mb-6">
            <Link href={"/"}>
              <Logo size="medium" />
            </Link>
          </div>
          {/* Colonne 2 : Navigation en 3 colonnes */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ul>
                <li className="mb-2">
                  <Link href="/about" className="hover:text-secondary-600">
                    À propos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services" className="hover:text-secondary-600">
                    Services
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2">
                  <Link href="/projets" className="hover:text-secondary-600">
                    Projets
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:text-secondary-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Colonne 3 : Contact et réseaux sociaux */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p>Adresse : 24t route des chaffardons 73100 Mouxy</p>
            <p>
              Téléphone :{" "}
              <a href="tel:+33665103478" className="hover:text-secondary-600">
                06 65 10 34 78
              </a>
            </p>
            <p>
              Email :{" "}
              <a
                href="mailto:g.bl@outlook.fr"
                className="hover:text-secondary-600"
              >
                g.bl@outlook.fr
              </a>
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.instagram.com/"
                className="text-white hover:text-secondary-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/geo-lusi/"
                className="text-white hover:text-secondary-600"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Lignes de séparation */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p>&copy; 2025 GLusitano Tous droits réservés.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/legal-notice" className="hover:text-secondary-600">
                Mentions légales
              </Link>
              <Link href="/privacy-policy" className="hover:text-secondary-600">
                Politique de confidentialité
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-secondary-600"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
