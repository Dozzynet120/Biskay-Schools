"use client";
import React from "react";

const testimonials = [
  { name: "Master Pelumi", message: "Won a 1st place in district Spelling Bee." },
  { name: "Miss Ebunoluwa", message: "2nd place in interschool/ district Spelling Bee competitions." },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-wine mb-10">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-green-50 p-6 rounded-lg shadow-lg">
              <p className="text-green-900 mb-4">"{t.message}"</p>
              <span className="font-bold text-wine">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
