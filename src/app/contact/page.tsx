import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-lg px-6 py-16">
      <div className="max-w-5xl w-full bg-white bg-opacity-10 shadow-lg rounded-lg p-8 md:p-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contactez-moi
        </h1>
        <p className="text-lg text-center text-gray-300 mb-10">
          Une question, un projet ? Je suis disponible pour échanger avec vous.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <FaPhone size={32} className="text-white" />
              </span>
              <div>
                <h3 className="text-lg font-medium">Téléphone</h3>
                <p className="text-gray-300">+33 6 65 10 34 78</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="bg-blue-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <MdEmail size={32} className="text-white" />
              </span>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a
                  href="mailto:g.bl@outlook.fr"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  g.bl@outlook.fr
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="bg-blue-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <IoLocationSharp size={32} className="text-white" />
              </span>
              <div>
                <h3 className="text-lg font-medium">Localisation</h3>
                <p className="text-gray-300">
                  24T route des chaffardons, 73100 Mouxy, France
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
            <form
              action="mailto:g.bl@outlook.fr"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-3 rounded-lg border border-gray-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  required
                  className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-3 rounded-lg border border-gray-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Téléphone"
                  required
                  className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-3 rounded-lg border border-gray-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Ville"
                  required
                  className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-3 rounded-lg border border-gray-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-3 rounded-lg border border-gray-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
              />

              <textarea
                placeholder="Votre message"
                rows={4}
                required
                className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-3 rounded-lg border border-gray-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Où me trouver ?
          </h2>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.570635889684!2d5.9350686127835575!3d45.679519218924575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba0d6914d91a7%3A0xc533b8427e494473!2s24%20Rte%20des%20Chaffardons%2C%2073100%20Mouxy!5e0!3m2!1sfr!2sfr!4v1742207092305!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
