import {
  FaCode,
  FaServer,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaProjectDiagram,
  FaRedo,
  FaBusinessTime,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    title: "Création de sites web",
    description:
      "Création de sites internet sur mesure, vitrines ou e-commerce, adaptés à vos besoins.",
    icon: <FaCode className="text-primary text-5xl" />,
  },
  {
    title: "Hébergement et maintenance",
    description:
      "Solutions d'hébergement performantes et maintenance pour assurer la stabilité de votre site.",
    icon: <FaServer className="text-primary text-5xl" />,
  },
  {
    title: "Formation en informatique",
    description:
      "Cours et formations en informatique pour développer vos compétences techniques et métiers.",
    icon: <FaChalkboardTeacher className="text-primary text-5xl" />,
  },
  {
    title: "Design UI/UX",
    description:
      "Optimisation de l'expérience utilisateur et création d'interfaces modernes et intuitives.",
    icon: <FaPaintBrush className="text-primary text-5xl" />,
  },
  {
    title: "Management de projet",
    description:
      "Accompagnement et gestion de projet agile pour optimiser vos processus et votre organisation.",
    icon: <FaProjectDiagram className="text-primary text-5xl" />,
  },
  {
    title: "Refonte de site",
    description:
      "Modernisation de votre site existant pour améliorer l'expérience utilisateur et booster votre taux de conversion.",
    icon: <FaRedo className="text-primary text-5xl" />,
  },
  {
    title: "Formation en management commercial opérationnel",
    description:
      "Formation en stratégie commerciale, gestion d'équipe et optimisation des performances de vente.",
    icon: <FaBusinessTime className="text-primary text-5xl" />,
  },
  {
    title: "Formation en UI/UX Design",
    description:
      "Apprentissage des fondamentaux du design d'interface et de l'expérience utilisateur pour des produits digitaux performants.",
    icon: <FaUsers className="text-primary text-5xl" />,
  },
];

export default function Services() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 py-16">
      <div className="max-w-4xl text-center pt-40 mb-12">
        <h1 className="text-5xl font-bold text-primary">Mes Services</h1>
        <p className="text-lg text-gray-300 mt-6">
          Découvrez mes services en freelance, alliant création web,
          hébergement, formation et gestion de projet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-8 flex flex-col items-center text-center shadow-lg"
          >
            {service.icon}
            <h2 className="text-2xl font-bold mt-4 text-white">
              {service.title}
            </h2>
            <p className="text-gray-300 mt-2 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
