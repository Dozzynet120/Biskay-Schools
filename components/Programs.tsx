"use client";
import React from "react";

const programs = [
  {
    title: "Primary School",
    color: "bg-green-500",
    description: "Foundational learning for young minds.",
    curriculum: [
      "Mathematics & Numeracy",
      "English Language & Literacy",
      "Science & Nature",
      "Arts & Creativity",
      "Physical Education & Sports",
    ],
  },
  {
    title: "Secondary School",
    color: "bg-yellow-500",
    description: "Advanced academic programs and skills.",
    curriculum: [
      "Core subjects: Maths, English, Science",
      "ICT & Digital Literacy",
      "Creative Arts & Design",
      "Entrepreneurship & Leadership",
      "Extra-curricular activities",
    ],
  },
  {
    title: "Digital Skills",
    color: "bg-wine",
    description: "Programming, Graphics Design, and more.",
    curriculum: [
      "Front-end Web Development (HTML, CSS, JS, React)",
      "Back-end Development (Node.js, Databases)",
      "Graphic Design (Adobe Illustrator, Photoshop)",
      "Programming (Python, Dart, C++)",
      "Digital Marketing & Content Creation",
    ],
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-wine mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105`}
            >
              {/* Card header */}
              <div className={`${program.color} rounded-t-lg p-4 mb-4`}>
                <h3 className="text-xl font-bold text-white">{program.title}</h3>
              </div>

              {/* Card body */}
              <p className="text-green-900 mb-4">{program.description}</p>

              <h4 className="font-semibold text-wine mb-2">Curriculum:</h4>
              <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                {program.curriculum.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
