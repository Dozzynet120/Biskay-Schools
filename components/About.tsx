"use client";
import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-wine mb-4">About Biskay Schools</h1>
          <p className="text-green-900 text-lg leading-relaxed max-w-3xl mx-auto">
            Biskay Schools is committed to nurturing the next generation of leaders, innovators, 
            and responsible global citizens. We provide quality education, advanced facilities, 
            and a supportive learning environment to help every student achieve their full potential.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-wine mb-4">Our Mission</h2>
            <p className="text-green-900 mb-6">
              To provide a holistic learning environment where students develop academic excellence, 
              digital literacy, critical thinking skills, and moral values. We aim to nurture young 
              minds who are confident, creative, and ready to make a positive impact on society.
            </p>

            <h2 className="text-2xl font-bold text-wine mb-4">Our Vision</h2>
            <p className="text-green-900 mb-6">
              To be recognized as a leading educational institution that blends academic rigor, 
              innovative teaching methods, and digital skills development, preparing students for 
              global opportunities.
            </p>

            <h2 className="text-2xl font-bold text-wine mb-4">What We Stand For</h2>
            <ul className="list-disc list-inside text-green-800 space-y-2">
              <li>Excellence in academics and practical skills</li>
              <li>Integrity, discipline, and respect</li>
              <li>Innovation and digital literacy</li>
              <li>Community engagement and leadership</li>
              <li>Inclusivity and nurturing diverse talents</li>
            </ul>
          </div>

          {/* Portal / School Image */}
          <div className="flex justify-center">
            <img
              src="/images/bs1.jpg" 
              alt="Biskay School Portal"
              className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Additional Information / Why Choose Us */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-wine mb-6">Why Choose Biskay Schools?</h2>
          <p className="text-green-900 leading-relaxed mb-4">
            At Biskay Schools, we believe every child deserves access to quality education and 
            opportunities to excel in academics, sports, arts, and digital skills. 
          </p>
          <p className="text-green-900 leading-relaxed">
            Our experienced faculty, modern facilities, and engaging learning environment ensure 
            students are well-prepared for higher education and future careers. 
            We focus on developing critical thinking, creativity, and a strong sense of community in all our learners.
          </p>
        </div>

      </div>
    </section>
  );
}
