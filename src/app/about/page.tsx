import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCode,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Section de présentation */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold">À Propos de Moi</h1>
        <p className="text-lg text-gray-300 mt-4">
          Passionné par la **technologie, le développement web et la
          formation**, j’ai évolué dans des environnements variés alliant
          **développement, support IT et enseignement**. Mon objectif est de
          transmettre mes connaissances et d’accompagner ceux qui souhaitent se
          former aux outils numériques.
        </p>
      </section>

      {/* Expérience et compétences */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {/* Développement Web */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
          <FaCode className="text-primary text-5xl" />
          <h2 className="text-2xl font-bold mt-4">Développement Web</h2>
          <p className="text-gray-300 mt-2">
            Conception et développement d’applications web avec **React.js,
            Next.js, Node.js, TypeScript**. Expérience en bases de données SQL &
            NoSQL.
          </p>
        </div>

        {/* Formation et Enseignement */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
          <FaChalkboardTeacher className="text-primary text-5xl" />
          <h2 className="text-2xl font-bold mt-4">Formateur & Pédagogie</h2>
          <p className="text-gray-300 mt-2">
            Formateur en BTS SIO et MCO, j’accompagne les étudiants en
            **informatique et gestion**. Expérience avec Greta et Cifep.
          </p>
        </div>

        {/* Expérience IT */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
          <FaBriefcase className="text-primary text-5xl" />
          <h2 className="text-2xl font-bold mt-4">Support & Gestion IT</h2>
          <p className="text-gray-300 mt-2">
            Expérience en **support technique de niveau 2 et 3, gestion de parc
            informatique et réseaux**. Travail chez Computacenter, ANTS, Saint
            Gobain.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Travaillons Ensemble</h2>
        <p className="text-gray-300 mt-2">
          Que ce soit pour un projet web, une formation ou une consultation IT,
          n’hésitez pas à me contacter.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-md text-lg transition duration-300">
            Me Contacter
          </button>
        </Link>
      </section>
    </div>
  );
}
