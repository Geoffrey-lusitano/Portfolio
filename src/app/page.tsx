"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import { FaCommentDots, FaChalkboardTeacher } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";

export default function Home() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main">
      <section className="relative w-full h-screen flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/background.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          ></Image>
        </div>

        {/* Contenu */}
        <div className="relative z-10 flex flex-col justify-center px-10 md:px-20 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">Geoffrey Lusitano,</h1>
          <h2 className="text-2xl py-5 md:text-4xl font-bold">
            Développeur & Formateur
          </h2>
          <p className="text-lg py-5 text-gray-300 mt-4">
            Je vous offre des solutions web personnalisées, combinant design
            moderne et fonctionnalités sur-mesure.
          </p>
          <button
            onClick={scrollToSkills}
            className="mt-6 px-6 py-3 bg-primary w-fit hover:bg-primary-600 text-white rounded-md text-lg transition duration-300 flex items-center"
          >
            Découvrir mes compétences ↓
          </button>
        </div>
      </section>

      {/* Section avec la disposition en colonne */}
      <section
        id="skills"
        ref={skillsRef}
        className="flex items-center justify-center h-screen"
      >
        <div className="w-full min-h-screen flex-col  justify-center px-4 md:px-20 ">
          <h2 className="text-2xl pl-12 pt-48 pb-20 md:text-4xl font-bold">
            Mes compétences
          </h2>
          <div className=" flex items-center justify-center px-4">
            {/* Première grande div */}
            <div className="grid grid-cols-1 gap-4 p-2 w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[175px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiHtml5 className="h-full w-full p-4 text-orange-500" />
                </div>
                <div className="h-[175px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiCss3 className="h-full w-full p-4 text-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[175px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiJavascript className="h-full w-full p-4 text-yellow-500" />
                </div>
                <div className="h-[175px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiTypescript className="h-full w-full p-4 text-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[250px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiReact className="h-full w-full p-4 text-cyan-500" />
                </div>
                <div className="h-[250px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiNextdotjs className="h-full w-full p-4 text-gray-100" />
                </div>
              </div>
            </div>

            {/* Seconde grande div */}
            <div className="grid grid-cols-1 gap-4 p-2 w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[175px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiNodedotjs className="h-full w-full p-4 text-green-500" />
                </div>
                <div className="h-[175px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiPython className="h-full w-full p-4 text-yellow-300" />
                </div>
              </div>
              <div className="h-[225px] bg-gray-800 rounded-lg flex items-center justify-center">
                Mes Compétences
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[200px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiMysql className="h-full w-full p-4 text-blue-500" />
                </div>
                <div className="h-[200px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <SiMongodb className="h-full w-full p-4 text-green-500" />
                </div>
              </div>
            </div>

            {/* Troisième grande div */}
            <div className="grid grid-cols-1 gap-4 p-2 w-full max-w-md">
              <div className="h-[184px] bg-gray-800 rounded-lg flex items-center justify-center">
                <FaChalkboardTeacher className="h-full w-full p-4 text-purple-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[125px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <FaCommentDots className="h-full w-full p-4 text-gray-400" />
                </div>
                <div className="h-[125px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <RiCustomerService2Fill className="h-full w-full p-4 text-gray-400" />
                </div>
              </div>
              <div className="h-[125px] bg-gray-800 rounded-lg flex items-center justify-center">
                <IoAnalytics className="h-full w-full p-4 text-blue-400" />
              </div>
              <div className="h-[150px] bg-gray-800 rounded-lg flex items-center justify-center">
                Adaptabilité
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
