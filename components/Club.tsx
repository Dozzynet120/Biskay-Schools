"use client";
import React from "react";
import {
  FaLanguage,
  FaMusic,
  FaPaintBrush,
  FaRunning,
  FaChess,
  FaTheaterMasks,
} from "react-icons/fa";

const clubs = [
  {
    title: "Foreign Languages",
    description:
      "Our list of foreign languages includes French and Mandarin among others.",
    icon: <FaLanguage size={35} className="text-wine" />,
  },
  {
    title: "Music Programme",
    description:
      "Our music programme includes vocal skills and the use of different musical instruments.",
    icon: <FaMusic size={35} className="text-wine" />,
  },
  {
    title: "Dance Class",
    description:
      "We offer a variety of dance classes including Ballet and African cultural dance.",
    icon: <FaTheaterMasks size={35} className="text-wine" />,
  },
  {
    title: "Art Classes",
    description:
      "The Arts & Craft club nurtures hand skills, creativity, and drawing skill development.",
    icon: <FaPaintBrush size={35} className="text-wine" />,
  },
  {
    title: "Sports Programme",
    description:
      "Our sports programme includes Basketball, Soccer, Swimming, and more.",
    icon: <FaRunning size={35} className="text-wine" />,
  },
  {
    title: "Gifted & Talented Programme",
    description:
      "Activities like KKB club, Chess Club, Science Club and Mentorship help develop creative minds.",
    icon: <FaChess size={35} className="text-wine" />,
  },
];

export default function Clubs() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/bis.mp4" type="video/mp4" />
      </video>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Our Club Activities
        </h2>

        <p className="text-white text-lg max-w-3xl mx-auto mb-14 drop-shadow-md">
          These are some of our many fun and exciting clubs that help keep our pupils
          engaged after school and develop skills beyond the classroom.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-lg border-t-4 border-wine transition duration-300"
            >
              <div className="flex justify-center mb-4">{club.icon}</div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">
                {club.title}
              </h3>
              <p className="text-green-800 leading-relaxed">
                {club.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
