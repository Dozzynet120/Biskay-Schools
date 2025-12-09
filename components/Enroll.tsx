"use client";
import React from "react";

export default function Enroll() {
  return (
    <section className="relative py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 uppercase">
          ENROL YOUR CHILD FOR 2025 – 2026
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-green-200">
          Begin your admission process into Biskay Schools by filling out the admission
          application form online. Provide accurate details to receive a confirmation email
          and begin your application.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href=" /pre-register" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-900 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-green-200 transition text-lg"
          >
            Enrol Now!
          </a>

          <a
            href="tel:+2347035843556"
            className="text-white text-xl font-semibold underline hover:text-green-300"
          >
            Or Call +234 703 584 3556
          </a>
        </div>
      </div>

      {/* Decorative Light Overlay */}
      <div className="absolute inset-0 bg-green-700 opacity-20 pointer-events-none"></div>
    </section>
  );
}
