"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-50 py-20 relative">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-wine mb-6">
            About Biskay Schools
          </h1>
          <p className="text-green-900 text-lg md:text-xl max-w-3xl mx-auto">
            Biskay Schools is a private co-educational day and boarding institution 
            dedicated to delivering outstanding all-round education for children 
            from ages 2 to 18. We prepare students to excel academically, socially, 
            morally, and spiritually, nurturing the leaders of tomorrow.
          </p>
        </div>
        <img
          src="/images/school-hero.jpg"
          alt="Biskay Schools"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/Bis3.jpg"
              alt="Mission"
              className="rounded-xl mb-6 shadow-lg"
            />
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To provide the best education, sufficiently balanced to equip children 
              for the competitive and technological world of the 21st century. 
              We nurture intellectual skills, leadership qualities, moral integrity, 
              and a sense of personal values.
            </p>
            <p className="text-gray-700">
              We encourage creativity, hard work, discipline, and self-expression 
              through a dynamic and child-centered learning environment.
            </p>
          </div>

          <div>
            <img
              src="/images/kk.jpg"
              alt="Vision"
              className="rounded-xl mb-6 shadow-lg"
            />
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              To become a center of excellence recognized for holistic education. 
              We aim to develop God-fearing, responsible leaders equipped 
              intellectually and morally for the present and future.
            </p>
            <p className="text-gray-700">
              Our vision emphasizes academic rigor, moral integrity, and the 
              cultivation of leadership and character that lasts a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Overview */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-wine mb-8 text-center">
            Our School at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/images/kkk.jpg"
              alt="Campus"
              className="rounded-xl shadow-lg"
            />
            <div className="space-y-4">
              <p className="text-gray-700">
                Biskay Schools provides a nurturing environment where children are encouraged 
                to explore their talents, pursue academic excellence, and grow morally and socially. 
                Our broad-based curriculum includes Nigerian and British educational systems, 
                delivered by highly qualified and certified teachers.
              </p>
              <p className="text-gray-700">
                Students have the opportunity to participate in a variety of co-curricular activities 
                including arts, sports, music, and technology, allowing them to develop a well-rounded skill set.
              </p>
              <p className="text-gray-700">
                We are committed to creating a safe, serene, and inspiring learning environment 
                where children feel valued, supported, and challenged to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Enrol Your Child for 2025-2026
          </h2>
          <p className="text-gray-700 mb-8">
            Begin your child's admission process into Biskay Schools by filling out 
            our online application form. For assistance, call <span className="font-semibold">+234 909 039 2483</span>.
          </p>
          <a
            href="/admission"
            className="bg-wine text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-900 transition"
          >
            Enrol Now!
          </a>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-wine mb-6">Biskay Schools Alumni Network</h2>
          <p className="text-gray-700 mb-4">
            Are you a former student of Biskay Schools? Join our alumni network to stay connected, 
            update your information, and participate in school events.
          </p>
          <a
            href="/alumni"
            className="bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Join Alumni Network
          </a>
        </div>
      </section>

      {/* Location / Google Map */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Find Us Here</h2>
          <p className="text-gray-700 mb-6">
            Visit our campus at Onosa, Ibeju-Lekki, Lagos State. We welcome parents and students for tours and enquiries.
          </p>
          <div className="w-full h-96 shadow rounded-xl overflow-hidden">
            <iframe
              title="Biskay Schools Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456!2d3.900000!3d6.500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b1234567890ab%3A0xc123456789abcdef!2sBiskay%20Schools!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
