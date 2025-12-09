"use client";
import React from "react";

const galleryImages = [
  { src: "/images/Bis.jpg", caption: "Students engaged in learning activities" },
  { src: "/images/Bis2.jpg", caption: "Digital skills workshop" },
  { src: "/images/Bis3.jpg", caption: "Outdoor sports and recreation" },
  { src: "/images/Bis4.jpg", caption: "Creative arts and performances" },
  { src: "/images/Bis5.jpg", caption: "Science lab experiments" },
  { src: "/images/Bis6.jpg", caption: "Graduation and achievements" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wine mb-4">Our Gallery</h2>
          <p className="text-green-900 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore the vibrant life at Biskay Schools. From academics and sports to digital skills and arts, our gallery captures the energy, creativity, and accomplishments of our students and faculty.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-green-900 bg-opacity-70 text-white p-3 opacity-0 hover:opacity-100 transition">
                <p className="text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-wine mb-4">Capturing Memories & Achievements</h3>
          <p className="text-green-900 leading-relaxed">
            At Biskay Schools, every moment counts. Our gallery showcases students excelling in academics, digital programs, sports, arts, and community events. We believe in celebrating achievements, fostering creativity, and documenting experiences that shape confident and well-rounded individuals.
          </p>
        </div>
      </div>
    </section>
  );
}
