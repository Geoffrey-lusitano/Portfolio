import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Projet Alpha",
    description:
      "Une plateforme de gestion de tâches avec une interface intuitive et des fonctionnalités avancées.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    image: "/images/site1.png",
    link: "/projects/alpha",
  },
  {
    id: 2,
    title: "Projet Beta",
    description:
      "Application mobile permettant le suivi des dépenses en temps réel et des rapports détaillés.",
    technologies: ["Flutter", "Firebase", "Dart"],
    image: "/images/site1.png",
    link: "/projects/beta",
  },
  {
    id: 3,
    title: "Projet Gamma",
    description:
      "Un site e-commerce moderne optimisé pour une expérience utilisateur fluide et sécurisée.",
    technologies: ["Next.js", "Stripe", "AWS S3"],
    image: "/images/site1.png",
    link: "/projects/gamma",
  },
];

export default function Project() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 px-8 py-16">
      {/* Introduction avec plus d'espacement et cohérence avec About */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl pt-40 font-bold text-primary">
          Créer & Inspirer. Geoffrey Lusitano
        </h1>
        <p className="text-xl text-gray-300 mt-6">
          Basé à Aix-les-Bains, je réalise des projets en freelance mêlant
          créativité et expertise technique. Découvrez une sélection de mes
          réalisations.
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center"
          >
            {/* Image du projet */}
            <div className="relative w-full md:w-1/2 h-72 md:h-96">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Contenu du projet */}
            <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 text-white">
              <h2 className="text-4xl font-bold text-primary">
                {project.title}
              </h2>
              <p className="text-lg text-gray-300 mt-6">
                {project.description}
              </p>

              <h3 className="text-2xl font-semibold mt-8">
                Technologies utilisées
              </h3>
              <ul className="list-disc list-inside text-gray-400 mt-4 text-lg">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              <Link
                href={project.link}
                className="inline-block mt-8 text-primary hover:underline text-lg"
              >
                Voir le projet →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
